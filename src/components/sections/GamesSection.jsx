import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dices, ChevronLeft, ChevronRight, ZoomIn, X, Sparkles } from 'lucide-react';
import Reveal from '../Reveal';

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

export default function GamesSection() {
  const [selectedGame, setSelectedGame] = useState(null);
  const scrollRef = useRef(null);

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

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

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
        <div className="flex items-center justify-between mb-4">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.05, 1, 1.05, 1],
              rotate: [0, -2, 2, -1, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-gold bg-brand-gold/10 px-3.5 py-1.5 rounded-full border border-brand-gold/30 shadow-sm shadow-brand-gold/10 cursor-default select-none"
          >
            <motion.span
              animate={{
                rotate: [0, 15, -15, 10, -5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2.5,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-gold stroke-[2.5]" />
            </motion.span>
            <span className="tracking-wide">Toca para ver imagen ampliada</span>
          </motion.div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              aria-label="Desplazar a la izquierda"
              className="p-2 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-dark transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <button
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
          className="flex items-center gap-4 overflow-x-auto snap-x snap-mandatory py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
        >
          {games.map((game, index) => (
            <div
              key={index}
              onClick={() => setSelectedGame(game)}
              className="snap-center shrink-0 w-52 sm:w-60 group relative rounded-2xl overflow-hidden border border-brand-gold/20 bg-brand-card p-2 shadow-lg hover:border-brand-gold/60 transition-all cursor-pointer"
            >
              <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-brand-dark/40 flex items-center justify-center">
                <img
                  src={game.src}
                  alt={game.title}
                  className="w-full h-full object-cover brightness-110 contrast-105 saturate-105 group-hover:scale-105 group-hover:brightness-115 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1.5 text-brand-gold">
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
            onClick={() => setSelectedGame(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <button
              onClick={() => setSelectedGame(null)}
              aria-label="Cerrar vista previa"
              className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold hover:text-white"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
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
                <h3 className="text-base font-bold text-brand-cream">
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