import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Download, Sparkles, ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';
import { MENU_SECTIONS } from '../../constants/menuData';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import Reveal from '../Reveal';
import carta1 from '../../assets/images/carta1.jpeg';
import carta2 from '../../assets/images/carta2.jpeg';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState(MENU_SECTIONS[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);

  const currentCategory = MENU_SECTIONS.find((cat) => cat.id === activeCategory);
  const isAlcoholSection = activeCategory === "tragos";
  const displayedImage = isAlcoholSection ? carta2 : carta1;
  const downloadFileName = isAlcoholSection ? "carta-juegos-bar.jpeg" : "carta-cafeteria-bocados.jpeg";

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -220 : 220;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-12 md:py-20 border-t border-brand-gold/15">
      <Reveal y={24} duration={0.4} className="text-center max-w-2xl mx-auto mb-8 px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Nuestra carta oficial
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-cream mt-2 tracking-tight">
          Sabores para cada jugada
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-2">
          Desde frappes y waffles para compartir en familia, hasta combos para retar a tus amigos.
        </p>
      </Reveal>

      <div className="sticky top-20 z-20 bg-brand-dark/95 backdrop-blur-md py-3 border-y border-brand-gold/15 mb-8">
        <div className="relative max-w-7xl mx-auto px-2 sm:px-10 flex items-center">
          <button
            onClick={() => handleScroll('left')}
            aria-label="Desplazar categorías hacia la izquierda"
            className="hidden sm:flex shrink-0 p-2 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-dark transition-all mr-2 cursor-pointer shadow-md"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
          </button>

          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto flex items-center gap-2 px-2 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
          >
            {MENU_SECTIONS.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide shrink-0 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-brand-gold text-brand-dark shadow-md shadow-brand-gold/25 scale-105"
                      : "bg-brand-card text-stone-300 border border-brand-gold/20 hover:border-brand-gold/50 hover:text-brand-cream"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleScroll('right')}
            aria-label="Desplazar categorías hacia la derecha"
            className="hidden sm:flex shrink-0 p-2 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/25 hover:bg-brand-gold hover:text-brand-dark transition-all ml-2 cursor-pointer shadow-md"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <Reveal delay={0.1} y={30} className="w-full lg:col-span-5 flex flex-col gap-3">
          <div 
            onClick={() => {
              if (window.innerWidth < 1024) setIsModalOpen(true);
            }}
            className="relative rounded-2xl overflow-hidden border border-brand-gold/25 bg-brand-card p-2 sm:p-3 shadow-xl cursor-pointer lg:cursor-default"
          >
            <img
              src={displayedImage}
              alt="Carta Dados y Bocados"
              className="w-full h-auto max-h-130 object-contain rounded-xl mx-auto"
            />

            <div className="lg:hidden absolute bottom-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-dark/90 backdrop-blur-md border border-brand-gold/40 text-[11px] font-bold text-brand-gold shadow-lg pointer-events-none">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Tocar para ampliar</span>
            </div>

            <div className="pt-3 text-center">
              <span className="text-xs font-bold text-brand-gold tracking-wider uppercase">
                {isAlcoholSection ? "Carta Juegos & Bar" : "Carta Cafetería & Bocados"}
              </span>
            </div>
          </div>

          <a
            href={displayedImage}
            download={downloadFileName}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-brand-dark bg-brand-gold hover:bg-brand-gold-light active:scale-95 shadow-md shadow-brand-gold/20 transition-all cursor-pointer"
          >
            <Download className="w-4 h-4 stroke-[2.5]" />
            <span>Descargar carta</span>
          </a>
        </Reveal>

        <div className="hidden lg:flex lg:col-span-7 flex-col">
          <div className="mb-5">
            <h3 className="text-2xl font-black text-brand-cream tracking-tight">
              {currentCategory.title}
            </h3>
            <p className="text-sm text-brand-gold italic mt-0.5">
              "{currentCategory.slogan}"
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3"
            >
              {currentCategory.items.map((item, index) => {
                const whatsappItemUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
                  `¡Hola Dados & Bocados! Quisiera pedir: ${item.name} (S/ ${item.price.toFixed(2)}).`
                )}`;

                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-brand-card border border-brand-gold/15 flex flex-row items-center justify-between gap-3 hover:border-brand-gold/40 transition-colors shadow-sm"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base text-brand-cream">
                          {item.name}
                        </span>
                        {item.tag && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full border border-brand-gold/20">
                            <Sparkles className="w-2.5 h-2.5" />
                            {item.tag}
                          </span>
                        )}
                      </div>
                      {item.detail && (
                        <p className="text-xs text-stone-400 mt-1">
                          {item.detail}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-end gap-4">
                      <span className="font-black text-base text-brand-gold whitespace-nowrap">
                        S/ {item.price.toFixed(2)}
                      </span>
                      <a
                        href={whatsappItemUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-brand-gold/15 text-brand-gold border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-dark transition-all cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Pedir</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div 
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              aria-label="Cerrar vista previa"
              className="fixed top-4 right-4 z-50 p-2.5 rounded-full bg-brand-dark/90 border border-brand-gold/40 text-brand-gold hover:text-white"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full max-h-[92vh] overflow-y-auto no-scrollbar rounded-2xl border border-brand-gold/30 bg-brand-dark p-2 shadow-2xl cursor-default"
            >
              <img
                src={displayedImage}
                alt="Carta ampliada"
                className="w-full h-auto max-h-[88vh] object-contain rounded-xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}