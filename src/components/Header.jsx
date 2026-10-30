export default function Header({ onToggleSidebar }) {
  return (
    <header className="w-full bg-slate-900 text-white px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-md">
      <a href="#inicio" className="font-bold text-lg text-amber-400">
        Dados y Bocados
      </a>

      <button 
        onClick={onToggleSidebar}
        className="md:hidden p-2 rounded bg-slate-800 focus:outline-none"
      >
        ☰
      </button>

      <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
        <a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a>
        <a href="#experiencia" className="hover:text-amber-400 transition-colors">Experiencia</a>
        <a href="#menu" className="hover:text-amber-400 transition-colors">Menú</a>
        <a href="#juegos" className="hover:text-amber-400 transition-colors">Juegos</a>
        <a href="#contacto" className="hover:text-amber-400 transition-colors">Ubicación y Horarios</a>
      </nav>
    </header>
  );
}