import "./hero.css";
import Typed from "typed.js";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css"; // estilos obrigatórios
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    //typed-js
    const typed = new Typed(".text-typed", {
      strings: ["Criar", "Desenvolver", "Inovar"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    //locomotive
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    //destrói a instância ao desmontar o componente
    return () => {
      typed.destroy();
      scroll.destroy();
    };
  }, []);

  return (
    <section className="container-hero" data-scroll-container>
      
      <div className="s-text" data-scroll-section>
        {/* texto */}
        <span className="greeting">
          Olá<span className="dot">.</span>
        </span>
        <div>
          <span className="divisor">|</span>
          <span className="intro">
            sou o <span className="name">Bruno Gonçalves</span>
          </span>
        </div>

        <span className="stack">
          <span className="bracket">&#91;</span> Desenvolvedor Fullstack
          <span className="bracket"> &#93;</span>
        </span>
        <div className="wrap-typed">
          <span>
            <span className="text-typed"></span>
          </span>
        </div>
      </div>

      <div className="s-img" data-scroll-section>
        <div className="photo-background">
          <span className="left symbol">&lt;</span>
          <div className="circle-glow"></div>
          <img
            src="foto-perfil.png"
            className="photo-perfil"
            alt="Minha foto"
          />
          <span className="right symbol">&gt;</span>
        </div>
      </div>
    </section>
  );
};
