import { useMemo } from 'react';
import { MapPin, Clock, MessageCircle, Navigation, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../constants/businessInfo';
import Reveal from '../Reveal';

export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessage
  )}`;

  const { lat, lng } = BUSINESS_INFO.coordinates;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=17&output=embed&hl=es`;

  const isOpenNow = useMemo(() => {
    const now = new Date();
    const day = now.getDay();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const isWeekend = day === 0 || day === 6;
    const openMinutes = isWeekend ? 15 * 60 : 16 * 60;
    const closeMinutes = isWeekend ? 23 * 60 : 22 * 60;

    return currentMinutes >= openMinutes && currentMinutes < closeMinutes;
  }, []);

  return (
    <section id="contacto" className="py-16 md:py-24 border-t border-brand-gold/15">
      <Reveal y={24} duration={0.4} className="text-center max-w-2xl mx-auto mb-10 px-4">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Encuéntranos
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-cream mt-2 tracking-tight">
          Ubicación y detalles
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-2">
          Todo lo que necesitas saber antes de venir a jugar y disfrutar.
        </p>
      </Reveal>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Reveal y={30} duration={0.5}>
          <div className="rounded-3xl border border-brand-gold/30 bg-brand-card shadow-2xl lg:border-0 lg:bg-transparent lg:shadow-none p-0 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center overflow-hidden lg:overflow-visible">
            <div className="lg:col-span-7 relative h-95 sm:h-110 lg:h-97.5 w-full rounded-none lg:rounded-3xl overflow-hidden lg:border lg:border-brand-gold/30 lg:shadow-2xl">
              <iframe
                title="Ubicación en Google Maps"
                src={mapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-dark/90 backdrop-blur-md border border-brand-gold/30 text-xs font-bold text-brand-cream shadow-lg pointer-events-auto">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Abancay, Perú</span>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-gold text-brand-dark text-xs font-bold shadow-lg hover:bg-brand-gold-light active:scale-95 transition-all pointer-events-auto"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
              <div className="lg:hidden absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-brand-dark via-brand-dark/60 to-transparent pointer-events-none" />
            </div>
            <div className="lg:col-span-5 relative -mt-16 lg:mt-0 z-10 px-4 pb-5 lg:p-0">
              <div className="flex lg:flex-col gap-3.5 overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory lg:snap-none pt-1 pb-1 lg:p-0">
                <div className="snap-center shrink-0 lg:shrink w-[80%] sm:w-65 lg:w-full p-4 rounded-2xl bg-brand-dark/95 border border-brand-gold/30 backdrop-blur-md shadow-xl flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="p-2 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                      <MapPin className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">Punto clave</span>
                  </div>
                  <h3 className="font-bold text-sm text-brand-cream">Dirección</h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                </div>
                <div className="snap-center shrink-0 lg:shrink w-[80%] sm:w-65 lg:w-full p-4 rounded-2xl bg-brand-dark/95 border border-brand-gold/30 backdrop-blur-md shadow-xl flex flex-col justify-center">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="p-2 rounded-xl bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                      <Clock className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        isOpenNow
                          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
                          : 'text-rose-400 bg-rose-500/10 border-rose-500/30'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'
                        }`}
                      />
                      {isOpenNow ? 'Abierto ahora' : 'Cerrado ahora'}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-brand-cream">Horarios</h3>
                  <div className="mt-1 space-y-0.5 text-xs">
                    <div className="flex justify-between text-stone-300">
                      <span>Lunes - Viernes:</span>
                      <span className="font-bold text-brand-gold">{BUSINESS_INFO.schedule.weekdays}</span>
                    </div>
                    <div className="flex justify-between text-stone-300">
                      <span>Sábado - Domingo:</span>
                      <span className="font-bold text-brand-gold">{BUSINESS_INFO.schedule.weekends}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="snap-center shrink-0 lg:shrink w-[80%] sm:w-65 lg:w-full p-4 rounded-2xl bg-brand-dark/95 border border-brand-gold/40 hover:border-brand-gold backdrop-blur-md shadow-xl flex flex-col justify-center transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="p-2 rounded-xl bg-brand-gold text-brand-dark group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full border border-brand-gold/20">
                      <Sparkles className="w-2.5 h-2.5" /> WhatsApp
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-brand-cream group-hover:text-brand-gold transition-colors">
                    ¿Vienes en grupo?
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                    Consulta disponibilidad y reserva tus mesas libres.
                  </p>
                </a>

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}