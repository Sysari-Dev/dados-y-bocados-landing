import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../constants/businessInfo';
import { scrollToSection } from '../utils/scrollToSection';
import Reveal from './Reveal';

function InstagramIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .59.05.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

export default function Footer() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessage
  )}`;
  const phoneHref = `tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`;
  const socialLinks = [
    { label: 'Instagram', href: BUSINESS_INFO.socials.instagram, Icon: InstagramIcon },
    { label: 'Facebook', href: BUSINESS_INFO.socials.facebook, Icon: FacebookIcon },
    { label: 'TikTok', href: BUSINESS_INFO.socials.tiktok, Icon: TikTokIcon },
  ];

  return (
    <footer className="w-full bg-brand-dark border-t border-brand-gold/15 text-stone-400 py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto">
        <Reveal y={16} duration={0.5}>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <a
                href="#inicio"
                onClick={(event) => scrollToSection(event, 'inicio')}
                className="inline-flex flex-col"
              >
                <span className="font-display text-2xl tracking-[0.08em] text-brand-cream leading-none">
                  DADOS <span className="text-brand-gold">&</span> BOCADOS
                </span>
                <span className="text-[11px] text-stone-400 tracking-[0.2em] uppercase mt-2">
                  {BUSINESS_INFO.tagline}
                </span>
              </a>
              <p className="text-xs text-stone-500 mt-3 max-w-xs leading-relaxed">
                Frappes, postres, snacks y juegos de mesa en el corazón de Abancay.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Explora
              </h3>
              <nav
                aria-label="Navegación del pie de página"
                className="mt-4 flex flex-col gap-2.5 text-sm font-medium"
              >
                <a
                  href="#inicio"
                  onClick={(event) => scrollToSection(event, 'inicio')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Inicio
                </a>
                <a
                  href="#menu"
                  onClick={(event) => scrollToSection(event, 'menu')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Carta
                </a>
                <a
                  href="#juegos"
                  onClick={(event) => scrollToSection(event, 'juegos')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Juegos
                </a>
                <a
                  href="#galeria"
                  onClick={(event) => scrollToSection(event, 'galeria')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Galería
                </a>
                <a
                  href="#contacto"
                  onClick={(event) => scrollToSection(event, 'contacto')}
                  className="hover:text-brand-gold transition-colors"
                >
                  Ubicación
                </a>
              </nav>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Contacto
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={phoneHref}
                    className="flex items-start gap-2.5 hover:text-brand-gold transition-colors"
                  >
                    <Phone className="mt-0.5 w-4 h-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    <span>{BUSINESS_INFO.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 hover:text-brand-gold transition-colors"
                  >
                    <MapPin className="mt-0.5 w-4 h-4 shrink-0 text-brand-gold" aria-hidden="true" />
                    <span>{BUSINESS_INFO.address}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="mt-0.5 w-4 h-4 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span>
                    <span className="block text-stone-300">
                      Lun - Vie: <span className="text-stone-500">{BUSINESS_INFO.schedule.weekdays}</span>
                    </span>
                    <span className="block text-stone-300">
                      Sáb - Dom: <span className="text-stone-500">{BUSINESS_INFO.schedule.weekends}</span>
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                Síguenos
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="p-2.5 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/20 hover:border-brand-gold hover:scale-105 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="p-2.5 rounded-xl bg-brand-card text-brand-gold border border-brand-gold/20 hover:border-brand-gold hover:scale-105 transition-all"
                >
                  <MessageCircle className="w-5 h-5 stroke-2" />
                </a>
              </div>
              <p className="text-xs text-stone-500 mt-4 max-w-xs leading-relaxed">
                Novedades, promociones y noches de juegos.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-brand-gold/10 text-xs text-stone-500 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
            <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
            <p>{BUSINESS_INFO.legalName} · RUC {BUSINESS_INFO.ruc}</p>
            <p className="flex items-center gap-1.5 text-stone-400">
              <span>Desarrollado por</span>
              <a
                href="https://www.sysari.net"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-gold hover:underline underline-offset-4 tracking-wide transition-colors"
              >
                Sysari
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
