import "./hero.css";
import Typed from "typed.js";
import { useEffect } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link as ScrollLink } from "react-scroll";
import { FadeIn } from "../lib/FramerAnimation/FadeIn/FadeIn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
    <section className="container-hero">
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
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-90}
            >
              <div className="wrap-btn-projects-external wrap-btn-projects-external-color-contact">
                <div className="wrap-btn-projects-internal">
                  <MailOutlineIcon className="arrow-icon" />
                </div>

                <div className="btn-text">
                  <span className="text-white">Falar comigo</span>
                  <span className="text-pink">Falar comigo</span>
                </div>
              </div>
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-20}
            >
              <div className="wrap-btn-projects-external wrap-btn-projects-external-color-projects">
                <div className="wrap-btn-projects-internal">
                  <ArrowForwardIosIcon className="arrow-icon" />
                </div>

                <div className="btn-text">
                  <span className="text-white">Ver projetos</span>
                  <span className="text-purple">Ver projetos</span>
                </div>
              </div>
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

      {/* img circle */}
      <div className="s-img-circle">
        <img
          className="text-circle"
          src="text-circle.png"
          alt="texto-curvado"
        />
        <img
          className="icon-circle"
          src="icon-circle.png"
          alt="icone-interno-texto-curvado"
        />
      </div>
    </section>
  );
};
