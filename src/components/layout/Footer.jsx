import logo from "@/assets/logo.jpg";

export const Footer = () => {
  const footerLinks = [
    { title: "Sintomas", sectionId: "problemas" },
    { title: "Método", sectionId: "metodo" },
    { title: "Galeria", sectionId: "galeria" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-brand-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo Instituto FOT"
                className="h-10 w-10 bg-white p-1 rounded-md"
              />
              <span className="font-display text-xl font-bold">
                Instituto <span className="text-brand-300">FOT</span>
              </span>
            </div>
            <p className="text-sm text-brand-200 mt-4">
              Cuidado ortopédico de excelência para todas as fases da vida.
            </p>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.sectionId}>
                  <button
                    onClick={() => scrollToSection(link.sectionId)}
                    className="text-brand-300 hover:text-white transition-colors text-left"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">
              Contato
            </h4>
            <address className="space-y-2 text-sm not-italic text-brand-300">
              <p>Rua Felipe Nery, 1012 - Guararapes</p>
              <p>Fortaleza, CE, 60810-310</p>
              <p className="pt-2">
                <a
                  href="tel:85981191467"
                  className="hover:text-white transition-colors"
                >
                  (85) 98119-1467
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-700 text-center text-xs text-brand-400">
          <p>
            &copy; {new Date().getFullYear()} Instituto FOT. Todos os direitos
            reservados.
          </p>
          <p className="mt-1">
            Desenvolvido com 🧠 por{" "}
            <a
              href="https://rafiweb.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Rafi Web
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
