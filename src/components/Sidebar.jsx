export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 md:hidden">
      <div 
        className="fixed inset-0 bg-black/60" 
        onClick={onClose} 
      />

      <aside className="fixed top-0 right-0 w-64 h-full bg-slate-900 text-white p-5 flex flex-col gap-6 shadow-xl">
        <div className="flex justify-between items-center border-b border-slate-800 pb-3">
          <span className="font-bold text-amber-400">Menú</span>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-white">✕</button>
        </div>

        <nav className="flex flex-col gap-4 text-base">
          <a href="#inicio" onClick={onClose} className="hover:text-amber-400 transition-colors">Inicio</a>
          <a href="#experiencia" onClick={onClose} className="hover:text-amber-400 transition-colors">Experiencia</a>
          <a href="#menu" onClick={onClose} className="hover:text-amber-400 transition-colors">Menú</a>
          <a href="#juegos" onClick={onClose} className="hover:text-amber-400 transition-colors">Juegos</a>
          <a href="#contacto" onClick={onClose} className="hover:text-amber-400 transition-colors">Ubicación y Horarios</a>
        </nav>
      </aside>
    </div>
  );
}