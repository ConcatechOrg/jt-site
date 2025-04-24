import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Detecta se a rota é /contato
  const isContatoPage = location.pathname === "/contato";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`pt-[4vw] md:pt-[1.5vw] absolute top-0 left-0 w-full transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } bg-transparent z-50`}
    >
      <div className="flex justify-between items-center mx-[4vw] ">     
        <Link to="/" className="text-2xl font-bold inline-block">
          <img
            src="/assets/logo.avif"
            alt="Logo"
            className="w-[5.1875rem] h-[3.4927rem]"
          />
        </Link>

        {/* LINKS - DESKTOP */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/home" className="inline-block">
            <img
              src="/assets/language-icon.svg"
              alt="Idioma"
              className="w-6 h-6"
            />
          </Link>
          <Link
            to="/commodities"
            className="font-bai font-medium text-bai-base text-gold"
          >
            Commodities
          </Link>
          <Link
            to="/home#sobre"
            className="font-bai font-medium text-bai-base text-gold"
          >
            Conect Us
          </Link>
          <Link
            to="/home#projetos"
            className="font-bai font-medium text-bai-base text-gold"
          >
            FAQ
          </Link>
        </div>

        {/* MENU MOBILE */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <FiX size={28} className="text-void" />
          ) : (
            <img
              src={
                isContatoPage
                  ? "/assets/hamburguer-button.svg"
                  : "/assets/hamburguer-white-button.svg"
              }
              alt="Abrir menu"
              className="w-7 h-7"
            />
          )}
        </button>
      </div>

      {/* MENU MOBILE */}
      {isOpen && (
        <div
          className={`md:hidden flex flex-col items-center  ${
            isContatoPage ? "bg-white" : "bg-void opacity-95"
          } p-4 space-y-4`}
        >
          <Link
            to="/home"
            onClick={() => setIsOpen(false)}
            className="font-bai font-medium text-bai-base text-gold"
          >
            Commodities
          </Link>
          <Link
            to="/home#sobre"
            onClick={() => setIsOpen(false)}
            className="font-bai font-medium text-bai-base text-gold"
          >
            Conect Us
          </Link>
          <Link
            to="/home#projetos"
            onClick={() => setIsOpen(false)}
            className="font-bai font-medium text-bai-base text-gold"
          >
            FAQ
          </Link>

          {/* <Button text={"Entrar em Contato"} border={true} color={isContatoPage ? "bg-opulent" : "bg-white"} icon={true} to="/contato" /> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
