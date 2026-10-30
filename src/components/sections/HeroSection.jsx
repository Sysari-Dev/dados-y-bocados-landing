export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-[80vh] flex flex-col justify-center items-center py-12 text-center">
      <h1 className="text-4xl md:text-6xl font-black mb-4">Buena comida, mejores momentos</h1>
      <p className="text-slate-600 max-w-xl mb-6">Frappes, postres y juegos de mesa para compartir en familia y amigos.</p>
      <a href="#menu" className="px-6 py-3 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition-colors">
        Ver Carta
      </a>
    </section>
  );
}