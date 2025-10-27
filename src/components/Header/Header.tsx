import { useState, useEffect, useRef } from "react";
import { Sling as Hamburger } from "hamburger-react";

import "./header.css";

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
    <header>
      {/* imagem */}
      <div className="container-img">
        <img src="logo-portfolio.png" alt="" />
      </div>

      {/* menu desktop */}
      <nav className="container-links-desktop">
        <ul>
          <li>
            <a href="">INICIO</a>
          </li>
          <li>
            <a href="">SOBRE</a>
          </li>
          <li>
            <a href="">PROJETOS</a>
          </li>
          <li>
            <a href="">CONTATO</a>
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
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
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
            <a href="#" onClick={() => setIsOpen(false)}>
              INICIO
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              SOBRE
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              PROJETOS
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(false)}>
              CONTATO
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
