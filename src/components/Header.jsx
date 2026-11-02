import { MessageCircle, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants/businessInfo';
import { scrollToSection } from '../utils/scrollToSection';

export default function Header({ onToggleSidebar }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessage
  )}`;

  return (
    <header className="w-full bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/15 sticky top-0 z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a
          href="#inicio"
          onClick={(event) => scrollToSection(event, 'inicio')}
          className="flex flex-col group"
        >
          <span className="font-display text-2xl sm:text-3xl tracking-[0.08em] text-brand-cream leading-none">
            DADOS <span className="text-brand-gold">&</span> BOCADOS
          </span>
          <span className="text-[11px] text-stone-400 font-medium tracking-widest uppercase">
            {BUSINESS_INFO.tagline}
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a
            href="#inicio"
            onClick={(event) => scrollToSection(event, 'inicio')}
            className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-200"
          >
            Inicio
          </a>
          <a
            href="#menu"
            onClick={(event) => scrollToSection(event, 'menu')}
            className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-200"
          >
            Carta
          </a>
          <a
            href="#juegos"
            onClick={(event) => scrollToSection(event, 'juegos')}
            className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-200"
          >
            Juegos
          </a>
          <a
            href="#galeria"
            onClick={(event) => scrollToSection(event, 'galeria')}
            className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-200"
          >
            Galería
          </a>
          <a
            href="#contacto"
            onClick={(event) => scrollToSection(event, 'contacto')}
            className="text-brand-cream/80 hover:text-brand-gold transition-colors duration-200"
          >
            Ubicación
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 1, rotate: 0 }}
            animate={{
              rotate: [0, -10, 8, -6, 4, -2, 0],
            }}
            transition={{
              rotate: {
                duration: 0.65,
                delay: 0.2,
                ease: "easeInOut",
              },
            }}
            whileHover={{ 
              scale: 1.07,
              transition: { duration: 0.15, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformOrigin: "bottom center" }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-brand-gold text-brand-dark shadow-md shadow-brand-gold/20 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 stroke-[2.5]" />
            <span>WhatsApp</span>
          </motion.a>

          <button 
            onClick={onToggleSidebar}
            aria-label="Abrir menú"
            className="lg:hidden p-2.5 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/20 hover:border-brand-gold/40 focus:outline-none transition-colors"
          >
            <Menu className="w-6 h-6 stroke-2" />
          </button>
        </div>
      </div>
    </header>
  );
}