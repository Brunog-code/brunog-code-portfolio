import "./hero.css";
import Typed from "typed.js";
import { useEffect } from "react";
import { Button } from "../Button/Button";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link as ScrollLink } from "react-scroll";
import { FadeIn } from "../lib/FramerAnimation/FadeIn/FadeIn";

export const Hero = () => {
  useEffect(() => {
    //typed-js
    const typed = new Typed(".text-typed", {
      strings: ["Planejar", "Desenvolver", "Inovar"],
      typeSpeed: 40,
      backSpeed: 50,
      loop: true,
    });

    //destrói a instância ao desmontar o componente
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="container-hero" data-scroll-section>
      <FadeIn direction="left">
        <div className="s-text">
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
          <div className="wrap-btn-hero">
            <ScrollLink
              to="contact" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-90} // se quiser compensar header fixo
            >
              <Button py="1rem">
                Entrar em contato
                <MailOutlineIcon />
              </Button>
            </ScrollLink>
            <ScrollLink
              to="projects" // id da section que quer rolar
              smooth={true} // rolagem suave
              duration={500} // duração em ms
              spy={true} // ativa a classe quando estiver visível
              offset={-20} // se quiser compensar header fixo
            >
              <Button py="1rem" color="#7f00ff">
                Ver projetos
                <ArrowForwardIosIcon />
              </Button>
            </ScrollLink>
          </div>
        </div>
      </FadeIn>

      <FadeIn direction="none" delay={0.3} duration={1}>
        <div className="s-img">
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
      </FadeIn>
    </section>
  );
};
