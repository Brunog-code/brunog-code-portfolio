import { useState, useEffect, useRef } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { Link as ScrollLink } from "react-scroll";

import "./header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  //referencias
  const menuRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  //Fecha o menu se a tela for redimensionada pra desktop
  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  //Fecha o menu mobile se clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      //se existir o menu e o botao, e o clique nao for no botao nem no menu, fecha o navMobile
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="header-navbar-home">
      {/* imagem */}
      <div className="container-logo">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-logo">
            Portfólio{" "}
            <span className="name-logo">
              BrunoGonçalves<span className="symbol-logo">/&gt;</span>
            </span>
          </span>
        </Link>
      </div>

      {/* menu desktop */}
      <nav className="container-links-desktop">
        <ul>
          <li>
            <ScrollLink
              to="hero" //id da section que quer rolar
              smooth={true} //rolagem suave
              duration={500} //duração em ms
              spy={true} //ativa a classe quando estiver visível
              offset={-80} //compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              INICIO
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about" //id da section que quer rolar
              smooth={true} //rolagem suave
              duration={500} //duração em ms
              spy={true} //ativa a classe quando estiver visível
              offset={-80} //compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              SOBRE
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-14} //compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              PROJETOS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-80} // se quiser compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              CONTATO
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Botão hamburger - só aparece mobile */}
      <button
        ref={buttonRef}
        className="hamburger-btn"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={isOpen ? "#ff007f" : "#fff"} // vermelho quando aberto, branco quando fechado
        />
      </button>

      {/* menu mobile */}
      <nav
        ref={menuRef}
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <ul>
          <li>
            <ScrollLink
              onClick={() => setIsOpen(false)}
              to="hero" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-80} // se quiser compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              INICIO
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => setIsOpen(false)}
              to="about" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-80} // se quiser compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              SOBRE
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => setIsOpen(false)}
              to="projects" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-13} // se quiser compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              PROJETOS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => setIsOpen(false)}
              to="contact" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-80} // se quiser compensar header fixo
              className="nav-link"
              activeClass="active"
            >
              CONTATO
            </ScrollLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
