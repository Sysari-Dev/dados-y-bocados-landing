export default function Header({ onToggleSidebar }) {
  return (
    <header className="w-full bg-slate-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-20">
      <div className="font-bold text-lg">Dados y Bocados</div>

      {/* Botón menú solo visible en móvil */}
      <button 
        onClick={onToggleSidebar}
        className="md:hidden p-2 rounded bg-slate-800 focus:outline-none"
      >
        ☰
      </button>

      {/* Menú visible solo en pantallas medianas hacia arriba */}
      <nav className="hidden md:flex gap-4">
        <a href="#inicio" className="hover:text-amber-400">Inicio</a>
        <a href="#menu" className="hover:text-amber-400">Menú</a>
        <a href="#contacto" className="hover:text-amber-400">Contacto</a>
      </nav>
    </header>
  );
}