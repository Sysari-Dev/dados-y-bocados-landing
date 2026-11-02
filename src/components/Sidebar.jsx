import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../constants/businessInfo';
import { scrollToSection } from '../utils/scrollToSection';

export default function Sidebar({ isOpen, onClose }) {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessage
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xs"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed top-0 right-0 w-72 h-full bg-brand-dark border-l border-brand-gold/20 text-brand-cream p-6 flex flex-col justify-between shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-center border-b border-brand-gold/15 pb-4">
                <span className="font-display text-xl tracking-[0.08em] text-brand-gold">
                  DADOS & BOCADOS
                </span>
                <button
                  onClick={onClose}
                  aria-label="Cerrar menú"
                  className="p-1 text-stone-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-4 text-base font-medium">
                <a
                  href="#inicio"
                  onClick={(event) => {
                    onClose();
                    scrollToSection(event, 'inicio');
                  }}
                  className="hover:text-brand-gold transition-colors py-1"
                >
                  Inicio
                </a>
                <a
                  href="#menu"
                  onClick={(event) => {
                    onClose();
                    scrollToSection(event, 'menu');
                  }}
                  className="hover:text-brand-gold transition-colors py-1"
                >
                  Menú
                </a>
                <a
                  href="#juegos"
                  onClick={(event) => {
                    onClose();
                    scrollToSection(event, 'juegos');
                  }}
                  className="hover:text-brand-gold transition-colors py-1"
                >
                  Juegos
                </a>
                <a
                  href="#galeria"
                  onClick={(event) => {
                    onClose();
                    scrollToSection(event, 'galeria');
                  }}
                  className="hover:text-brand-gold transition-colors py-1"
                >
                  Galería
                </a>
                <a
                  href="#contacto"
                  onClick={(event) => {
                    onClose();
                    scrollToSection(event, 'contacto');
                  }}
                  className="hover:text-brand-gold transition-colors py-1"
                >
                  Ubicación
                </a>
              </nav>
            </div>
            <div className="pt-6 border-t border-brand-gold/15 flex flex-col gap-3">
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-brand-gold text-brand-dark shadow-md shadow-brand-gold/20 text-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                <span>WhatsApp</span>
              </motion.a>
              <span className="text-[11px] text-center text-stone-500">
                {BUSINESS_INFO.address}
              </span>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}