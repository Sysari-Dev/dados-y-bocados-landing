import Reveal from './Reveal';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-6 px-4 text-center text-sm">
      <Reveal y={16} duration={0.5}>
        <p>© {new Date().getFullYear()} Dados y Bocados. Todos los derechos reservados.</p>
      </Reveal>
    </footer>
  );
}
