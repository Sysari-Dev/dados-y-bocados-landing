import Reveal from '../Reveal';

export default function MenuSection() {
  return (
    <section id="menu" className="py-16 border-t border-slate-200">
      <Reveal y={32} className="text-center mb-8">
        <h2 className="text-3xl font-bold">Nuestra Carta</h2>
      </Reveal>
      <Reveal delay={0.1} y={40}>
        <div className="p-8 bg-slate-100 rounded-xl text-center text-slate-500">
          Aquí se cargará el catálogo interactivo de frappes, waffles, bebidas y snacks.
        </div>
      </Reveal>
    </section>
  );
}
