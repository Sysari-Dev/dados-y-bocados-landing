import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Reveal from '../Reveal';
import LazyImage from '../LazyImage';
import img1 from '../../assets/images/image1.jpeg';
import img2 from '../../assets/images/image2.jpeg';
import img3 from '../../assets/images/image3.jpeg';
import img4 from '../../assets/images/image4.jpeg';
import img5 from '../../assets/images/image5.jpeg';
import img6 from '../../assets/images/image6.jpeg';
import img7 from '../../assets/images/image7.jpeg';
import img8 from '../../assets/images/image8.jpeg';

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);

  const gallery = [
    { src: img1, title: "Ambiente cálido", size: "md:col-span-2 md:row-span-2" },
    { src: img2, title: "Frappes artesanales", size: "md:col-span-2 md:row-span-2" },
    { src: img3, title: "Tardes de juegos", size: "" },
    { src: img4, title: "Lugar especial", size: "" },
    { src: img5, title: "Espacio para compartir", size: "" },
    { src: img6, title: "Momentos en familia", size: "" },
    { src: img7, title: "Risas y estrategia", size: "sm:col-span-2 md:col-span-2" },
    { src: img8, title: "Un equipo de amigos", size: "sm:col-span-2 md:col-span-2" },
  ];

  return (
    <section id="galeria" className="py-16 md:py-24 border-t border-brand-gold/15">
      <Reveal amount={0.4} y={32} className="text-center max-w-2xl mx-auto mb-12">
        <span className="block text-xs font-bold uppercase tracking-widest text-brand-gold">
          Vive la experiencia
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-cream mt-2 tracking-tight">
          Nuestro espacio
        </h2>
        <p className="text-stone-300 text-sm sm:text-base mt-3">
          Un rincón pensado para desconectar de la rutina, saborear un buen antojo y retar a tus amigos en una partida.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:auto-rows-45">
        {gallery.map((item, index) => {
          const isHiddenMobile = !showAll && index >= 2;

          return (
            <Reveal
              key={index}
              delay={index * 0.08}
              y={36}
              scale={0.97}
              className={`group relative overflow-hidden rounded-2xl border border-brand-gold/20 bg-brand-card h-64 md:h-full ${item.size} ${
                isHiddenMobile ? 'hidden md:block' : 'block'
              }`}
            >
              <LazyImage
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-linear-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-sm font-bold text-brand-cream drop-shadow-md">
                  {item.title}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Botón ver más / ver menos exclusivo para mobile */}
      <div className="mt-6 text-center md:hidden">
        <button
          onClick={() => setShowAll(prev => !prev)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-brand-card text-brand-gold border border-brand-gold/30 hover:bg-brand-gold/10 active:scale-95 transition-all cursor-pointer shadow-md"
        >
          <span>{showAll ? 'Ver menos fotos' : 'Ver todas las fotos'}</span>
          {showAll ? (
            <ChevronUp className="w-4 h-4 stroke-[2.5]" />
          ) : (
            <ChevronDown className="w-4 h-4 stroke-[2.5]" />
          )}
        </button>
      </div>
    </section>
  );
}