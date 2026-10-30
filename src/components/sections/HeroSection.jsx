import { motion } from 'motion/react';
import { UtensilsCrossed, MessageCircle } from 'lucide-react';
import logo from '../../assets/icons/logo.png';
import { BUSINESS_INFO } from '../../constants/businessInfo';

export default function HeroSection() {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessage
  )}`;

  return (
    <section 
      id="inicio" 
      className="relative flex flex-col justify-start items-center text-center pt-4 sm:pt-6 pb-12 overflow-hidden"
    >
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 mb-3"
      >
        <img 
          src={logo} 
          alt={BUSINESS_INFO.name} 
          className="w-32 sm:w-36 md:w-44 h-auto mx-auto drop-shadow-[0_0_25px_rgba(255,158,27,0.35)]"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.15 }}
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-black text-brand-cream tracking-tight max-w-2xl leading-tight"
      >
        Buena comida, <br className="hidden sm:inline" />
        <span className="text-brand-gold">mejores momentos</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="relative z-10 mt-3 text-stone-300 text-sm sm:text-base max-w-lg font-normal leading-relaxed"
      >
        Frappes artesanales, postres, snacks y una colección de juegos de mesa para disfrutar entre amigos y familia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="relative z-10 mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
      >
        <a
          href="#menu"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold bg-brand-gold text-brand-dark shadow-md shadow-brand-gold/25 hover:bg-brand-gold-light active:scale-95 transition-all text-sm"
        >
          <UtensilsCrossed className="w-4 h-4 stroke-[2.5]" />
          <span>Ver carta</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold bg-brand-card text-brand-cream border border-brand-gold/30 hover:border-brand-gold hover:text-brand-gold active:scale-95 transition-all text-sm"
        >
          <MessageCircle className="w-4 h-4 text-brand-gold stroke-[2.5]" />
          <span>Reservar mesa</span>
        </a>
      </motion.div>
    </section>
  );
}