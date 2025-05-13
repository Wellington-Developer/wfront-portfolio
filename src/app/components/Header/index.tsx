const Header = () => (
  <header className="w-full py-4 px-6 md:px-12 bg-neutral-950 sticky top-0 z-50 border-b border-white/10">
    <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xl font-bold text-white font-mono">
        WFRONT<span className="text-amber-500">.</span>
        </span>
        <nav className="hidden md:flex gap-6 text-sm text-neutral-300">
        <a href="#intro" className="hover:text-white transition">Início</a>
        <a href="#skills" className="hover:text-white transition">Habilidades</a>
        <a href="#projects" className="hover:text-white transition">Projetos</a>
        <a href="#services" className="hover:text-white transition">Serviços</a>
        <a href="#contact" className="hover:text-white transition">Contato</a>
        </nav>
    </div>
  </header>
);

export default Header;