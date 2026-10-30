export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-16 border-t border-slate-200">
      <h2 className="text-3xl font-bold text-center mb-8">Nuestro Espacio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="h-48 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">Foto Local 1</div>
        <div className="h-48 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">Foto Local 2</div>
        <div className="h-48 bg-slate-200 rounded-lg flex items-center justify-center text-slate-500">Foto Local 3</div>
      </div>
    </section>
  );
}