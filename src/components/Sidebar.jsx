export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 md:hidden">
      {/* Fondo oscuro para cerrar al hacer clic afuera */}
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={onClose} 
      />

      {/* Panel lateral */}
      <aside className="fixed top-0 right-0 w-64 h-full bg-slate-800 text-white p-5 flex flex-col gap-4 shadow-xl">
        <div className="flex justify-between items-center border-b border-slate-700 pb-3">
          <span className="font-bold">Menú</span>
          <button onClick={onClose} className="p-1">✕</button>
        </div>

        <nav className="flex flex-col gap-3">
          <a href="#inicio" onClick={onClose} className="hover:text-amber-400">Inicio</a>
          <a href="#menu" onClick={onClose} className="hover:text-amber-400">Menú</a>
          <a href="#contacto" onClick={onClose} className="hover:text-amber-400">Contacto</a>
        </nav>
      </aside>
    </div>
  );
}