import "./hero.css";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link as ScrollLink } from "react-scroll";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { FadeIn } from "../lib/Gsap/FadeIn";

// reveal-effect-import
import { Canvas, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { ImageReveal } from "../lib/Three/ImageReveal";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  //verifica se é mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // typed
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

  // Força o canvas a ser realmente transparente
  function ForceTransparentCanvas() {
    const { gl, scene } = useThree();

    useEffect(() => {
      // 🔹 Garante transparência real
      gl.setClearColor(0x000000, 0); // Preto, mas alpha = 0
      scene.background = null;

      // 🔹 Corrige espaço de cor (mantém cores corretas)
      gl.outputColorSpace = THREE.SRGBColorSpace;
      gl.toneMapping = THREE.NoToneMapping;

      // 🔹 Garante que o elemento DOM do canvas não tenha cor
      gl.domElement.style.backgroundColor = "transparent";
    }, [gl, scene]);

    return null;
  }

  return (
    <section className="container-hero">
      <FadeIn ref={textRef} x={-200} duration={1} zIndex={5}>
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
            <span className="bracket">&#91;</span>Desenvolvedor Fullstack
            <span className="bracket">&#93;</span>
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
              offset={-70}
            >
              <div className="wrap-btn-projects-external wrap-btn-projects-external-color-contact">
                <div className="wrap-btn-projects-internal">
                  <MailOutlineIcon className="arrow-icon" />
                </div>

                <div className="btn-text">
                  <span className="text-white">Contato</span>
                  <span className="text-pink">Contato</span>
                </div>
              </div>
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-14}
            >
              <div className="wrap-btn-projects-external wrap-btn-projects-external-color-projects">
                <div className="wrap-btn-projects-internal">
                  <ArrowForwardIosIcon className="arrow-icon" />
                </div>

                <div className="btn-text">
                  <span className="text-white">Ver Projetos</span>
                  <span className="text-purple">Ver Projetos</span>
                </div>
              </div>
            </ScrollLink>
          </div>
        </div>
      </FadeIn>

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


      {!isMobile && (
        <div className="container-canvas-hero">
          <Canvas
            orthographic
            camera={{ zoom: 1, position: [0, 0, 1] }}
            gl={{
              antialias: true,
              alpha: true,
              toneMapping: THREE.NoToneMapping,
              outputColorSpace: THREE.SRGBColorSpace,
            }}
            style={{
              backgroundColor: "transparent",
              display: "block",
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <ForceTransparentCanvas />
            {/* 🔹 Basta passar o caminho do vídeo em vez da imagem */}
            <ImageReveal video="/vids/vid-medium.mp4" />
          </Canvas>
        </div>
      )}
    </section>
  );
};
