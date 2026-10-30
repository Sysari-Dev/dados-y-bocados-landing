import { MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';
import Reveal from './Reveal';

export default function Footer() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessage
  )}`;

  return (
    <footer className="w-full bg-brand-dark border-t border-brand-gold/15 text-stone-400 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <Reveal y={16} duration={0.5}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="font-black text-xl tracking-wider text-brand-cream">
                DADOS <span className="text-brand-gold">&</span> BOCADOS
              </span>
              <span className="text-xs text-stone-400 tracking-widest uppercase mt-1">
                {BUSINESS_INFO.tagline}
              </span>
              <p className="text-xs text-stone-500 mt-2 max-w-xs">
                Frappes, postres, snacks y juegos de mesa en el corazón de Abancay.
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a href="#inicio" className="hover:text-brand-gold transition-colors">Inicio</a>
              <a href="#menu" className="hover:text-brand-gold transition-colors">Carta</a>
              <a href="#juegos" className="hover:text-brand-gold transition-colors">Juegos</a>
              <a href="#galeria" className="hover:text-brand-gold transition-colors">Galería</a>
              <a href="#contacto" className="hover:text-brand-gold transition-colors">Ubicación</a>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/20 hover:border-brand-gold hover:scale-105 transition-all"
              >
                <MessageCircle className="w-5 h-5 stroke-2" />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ubicación"
                className="p-2.5 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/20 hover:border-brand-gold hover:scale-105 transition-all"
              >
                <MapPin className="w-5 h-5 stroke-2" />
              </a>
            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-brand-gold/10 text-center text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
            <p>{BUSINESS_INFO.address}</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}