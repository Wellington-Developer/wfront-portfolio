const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white py-10 px-4">
            <div className="max-w-5xl px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                <h2 className="text-xl font-bold">WFRONT</h2>
                <p className="text-sm text-gray-400">Desenvolvedor Front-end • React.js • Freelancer</p>
                </div>

                <div className="flex space-x-6">
                <a href="https://github.com/Wellington-Developer" target="_blank" className="hover:text-amber-500 transition">
                    GitHub
                </a>
                <a href="https://br.linkedin.com/in/wellington-santos-6a2670214" target="_blank" className="hover:text-amber-500 transition">
                    LinkedIn
                </a>
                <a href="mailto:wfront.code@email.com" className="hover:text-amber-500 transition">
                    E-mail
                </a>
                </div>

                <div className="text-sm text-gray-500 text-center md:text-right">
                © {new Date().getFullYear()} Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer;