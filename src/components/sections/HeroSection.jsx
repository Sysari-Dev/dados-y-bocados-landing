import { motion, useReducedMotion } from 'motion/react';
import { UtensilsCrossed, MessageCircle } from 'lucide-react';
import AnimatedLogo from '../AnimatedLogo';
import { BUSINESS_INFO } from '../../constants/businessInfo';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    BUSINESS_INFO.whatsappMessage
  )}`;

  return (
    <section
      id="inicio"
      className="relative flex flex-col items-center text-center pt-6 sm:pt-10 pb-16 md:pb-24 overflow-hidden"
    >
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-brand-gold/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 1, y: [0, -8, 0] }
        }
        transition={
          prefersReducedMotion
            ? { duration: 0.5 }
            : {
                opacity: { duration: 0.5 },
                y: { duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 2.8 },
              }
        }
        className="relative z-10 mb-2 flex justify-center"
      >
        <AnimatedLogo className="w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[22rem] aspect-square drop-shadow-[0_0_25px_rgba(249,185,51,0.28)]" />
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
