import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Dices, ChevronLeft, ChevronRight, ZoomIn, X, Sparkles, Pause, Play } from 'lucide-react';
import Reveal from '../Reveal';
import LazyImage from '../LazyImage';

import juego1 from '../../assets/images/juego1.jpeg';
import juego2 from '../../assets/images/juego2.jpeg';
import juego3 from '../../assets/images/juego3.jpeg';
import juego4 from '../../assets/images/juego4.jpeg';
import juego5 from '../../assets/images/juego5.jpeg';
import juego6 from '../../assets/images/juego6.jpeg';
import juego7 from '../../assets/images/juego7.jpeg';
import juego8 from '../../assets/images/juego8.jpeg';
import juego9 from '../../assets/images/juego9.jpeg';
import juego10 from '../../assets/images/juego10.jpeg';
import juego11 from '../../assets/images/juego11.jpeg';

const AUTO_ADVANCE_MS = 2200;
const CARD_GAP = 16;

export default function GamesSection() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const scrollRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  const games = [
    { src: juego1, title: "El Sillón de la Verdad" },
    { src: juego2, title: "UNO Flip!" },
    { src: juego3, title: "Dobble" },
    { src: juego4, title: "Ni Sí, Ni No" },
    { src: juego5, title: "Entre Copas" },
    { src: juego6, title: "Reto Flash" },
    { src: juego7, title: "Polilla Tramposa" },
    { src: juego8, title: "Ponte Mosca" },
    { src: juego9, title: "Súper Ludo" },
    { src: juego10, title: "Pictureka!" },
    { src: juego11, title: "Monopoly Deal" },
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || isPaused || !isInView || selectedGame || prefersReducedMotion) return;

    const el = scrollRef.current;
    if (!el) return;

    const intervalId = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return;

      const card = el.querySelector('[data-game-card]');
      const step = card ? card.getBoundingClientRect().width + CARD_GAP : 280;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;

      if (el.scrollLeft >= maxScroll - 8) {
        el.scrollTo({ left: 0, behavior: 'auto' });
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(intervalId);
  }, [isAutoPlaying, isPaused, isInView, selectedGame, prefersReducedMotion]);

  useEffect(() => {
    if (!selectedGame) return;

    const focusId = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedGame(null);
        window.requestAnimationFrame(() => lastFocusedRef.current?.focus());
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(focusId);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedGame]);

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -280 : 280;
    scrollRef.current.scrollBy({
      left: offset,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const openGame = (game, trigger) => {
    lastFocusedRef.current = trigger || null;
    setSelectedGame(game);
  };

  const closeGame = () => {
    setSelectedGame(null);
    window.requestAnimationFrame(() => lastFocusedRef.current?.focus());
  };

  const pauseAutoPlay = () => setIsPaused(true);
  const resumeAutoPlay = () => setIsPaused(false);

  const modalMotion = prefersReducedMotion
    ? { initial: false, animate: { opacity: 1, scale: 1 }, exit: { opacity: 1, scale: 1 } }
    : { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.9, opacity: 0 } };

  return (
    <section id="juegos" className="py-16 md:py-24 border-t border-brand-gold/15">
      <Reveal y={24} duration={0.4} className="text-center max-w-2xl mx-auto mb-10 px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Diversión en mesa
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-cream mt-2 tracking-tight">
          Nuestros juegos
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-2">
          Pide tus bebidas o piqueos favoritos y disfruta de cualquiera de nuestros juegos de forma libre.
        </p>
      </Reveal>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <motion.div
            animate={prefersReducedMotion ? undefined : {
              scale: [1, 1.05, 1, 1.05, 1],
              rotate: [0, -2, 2, -1, 0],
            }}
            transition={prefersReducedMotion ? { duration: 0 } : {
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/30 shadow-sm shadow-brand-gold/10 cursor-default select-none"
          >
            <motion.span
              animate={prefersReducedMotion ? undefined : {
                rotate: [0, 15, -15, 10, -5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={prefersReducedMotion ? { duration: 0 } : {
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold stroke-[2.5]" />
            </motion.span>
            <span className="tracking-wide">Toca para ampliar</span>
          </motion.div>
          <div className="flex items-center gap-2">
            {!prefersReducedMotion && (
              <button
                type="button"
                onClick={() => setIsAutoPlaying((playing) => !playing)}
                aria-label={isAutoPlaying ? 'Pausar carrusel automático' : 'Reanudar carrusel automático'}
                title={isAutoPlaying ? 'Pausar carrusel automático' : 'Reanudar carrusel automático'}
                className="p-2 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-dark transition-all cursor-pointer shadow-md"
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4 stroke-[2.5]" />
                ) : (
                  <Play className="w-4 h-4 stroke-[2.5]" />
                )}
              </button>
            )}
            <button
              type="button"
              onClick={() => handleScroll('left')}
              aria-label="Desplazar a la izquierda"
              className="p-2 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-dark transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('right')}
              aria-label="Desplazar a la derecha"
              className="p-2 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-dark transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          role="region"
          aria-label="Carrusel de juegos de mesa"
          onMouseEnter={pauseAutoPlay}
          onMouseLeave={resumeAutoPlay}
          onFocus={pauseAutoPlay}
          onBlur={resumeAutoPlay}
          onPointerDown={pauseAutoPlay}
          onPointerUp={resumeAutoPlay}
          onPointerCancel={resumeAutoPlay}
          className="flex items-center gap-4 overflow-x-auto snap-x snap-mandatory py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {games.map((game) => (
            <div
              key={game.title}
              data-game-card
              role="button"
              tabIndex={0}
              onClick={(event) => openGame(game, event.currentTarget)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  openGame(game, event.currentTarget);
                }
              }}
              aria-label={`Ampliar imagen de ${game.title}`}
              className="snap-center shrink-0 w-52 sm:w-60 group relative rounded-2xl overflow-hidden border border-brand-gold/20 bg-brand-card p-2 shadow-lg hover:border-brand-gold/60 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark"
            >
              <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-brand-dark/40 flex items-center justify-center">
                <LazyImage
                  src={game.src}
                  alt={game.title}
                  className="w-full h-full object-cover brightness-110 contrast-105 saturate-105 group-hover:scale-105 group-hover:brightness-115"
                />
                <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-brand-gold">
                  <ZoomIn className="w-5 h-5 stroke-[2.5]" />
                  <span className="text-xs font-bold text-brand-cream">Ampliar</span>
                </div>
              </div>
              <div className="pt-2 px-1 flex items-center justify-between text-xs font-semibold text-brand-cream">
                <span className="truncate">{game.title}</span>
                <Dices className="w-3.5 h-3.5 text-brand-gold shrink-0 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedGame && (
          <div
            onClick={closeGame}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeGame}
              aria-label="Cerrar vista previa"
              className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
            <motion.div
              {...modalMotion}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="game-preview-title"
              className="relative max-w-sm sm:max-w-md w-full max-h-[85vh] rounded-2xl overflow-hidden border border-brand-gold/30 bg-brand-dark p-3 shadow-2xl cursor-default"
            >
              <div className="aspect-3/4 w-full rounded-xl overflow-hidden bg-brand-card">
                <img
                  src={selectedGame.src}
                  alt={selectedGame.title}
                  className="w-full h-full object-contain brightness-110 contrast-105 saturate-105"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 id="game-preview-title" className="text-base font-bold text-brand-cream">
                  {selectedGame.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
