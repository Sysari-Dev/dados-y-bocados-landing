import Reveal from '../Reveal';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-16 border-t border-slate-200">
      <Reveal y={32} className="text-center mb-8">
        <h2 className="text-3xl font-bold">Ubicación y Horarios</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Reveal delay={0.1} y={40} className="p-6 bg-slate-100 rounded-xl">
          <h3 className="font-bold text-xl mb-2">Horarios</h3>
          <p className="text-slate-600">Días y horas de atención.</p>
        </Reveal>
        <Reveal delay={0.2} y={40} className="p-6 bg-slate-100 rounded-xl">
          <h3 className="font-bold text-xl mb-2">Dónde encontrarnos</h3>
          <p className="text-slate-600">Dirección y botón a Google Maps.</p>
        </Reveal>
      </div>
    </section>
  );
}
