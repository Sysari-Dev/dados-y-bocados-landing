import { motion } from 'motion/react';
import img1 from '../../assets/images/image1.jpeg';
import img2 from '../../assets/images/image2.jpeg';
import img3 from '../../assets/images/image3.jpeg';
import img4 from '../../assets/images/image4.jpeg';
import img5 from '../../assets/images/image5.jpeg';
import img6 from '../../assets/images/image6.jpeg';
import img7 from '../../assets/images/image7.jpeg';
import img8 from '../../assets/images/image8.jpeg';

export default function ExperienceSection() {
  const gallery = [
    { src: img1, title: "Ambiente cálido", size: "md:col-span-2 md:row-span-2 h-72 md:h-full" },
    { src: img2, title: "Frappes artesanales", size: "h-64" },
    { src: img3, title: "Tardes de juegos", size: "h-64" },
    { src: img4, title: "Postres y waffles", size: "md:col-span-2 h-64" },
    { src: img5, title: "Espacio para compartir", size: "h-64" },
    { src: img6, title: "Snacks salados", size: "h-64" },
    { src: img7, title: "Risas y estrategia", size: "h-64" },
    { src: img8, title: "Momentos en familia", size: "md:col-span-2 h-64" },
  ];

  return (
    <section id="experiencia" className="py-16 md:py-24 border-t border-brand-gold/15">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">
          Vive la experiencia
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-cream mt-2 tracking-tight">
          Nuestro espacio
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3">
          Un rincón pensado para desconectar de la rutina, saborear un buen antojo y retar a tus amigos en una partida.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[240px]">
        {gallery.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-card ${item.size}`}
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-sm font-bold text-brand-cream drop-shadow-md">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}