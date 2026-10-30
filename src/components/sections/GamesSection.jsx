import Reveal from '../Reveal';

export default function GamesSection() {
  return (
    <section id="juegos" className="py-16 border-t border-slate-200">
      <Reveal y={32} className="text-center mb-8">
        <h2 className="text-3xl font-bold">Zona de Juegos</h2>
      </Reveal>
      <Reveal delay={0.1} y={40}>
        <div className="p-8 bg-slate-100 rounded-xl text-center text-slate-500">
          Aquí se mostrará la colección de juegos de mesa y dinámicas para los clientes.
        </div>
      </Reveal>
    </section>
  );
}
