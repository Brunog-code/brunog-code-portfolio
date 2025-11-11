import "./about.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveCube } from "../lib/Three/InteractiveCube";
import { Button } from "../Button/Button";
import { useScrollTitle } from "../../hooks/useScrollTitle";

export const About = () => {
  const refPipe = useRef<HTMLDivElement | null>(null);

  ////animacao div
  const { scrollYProgress: scrollPipe } = useScroll({
    target: refPipe,
    offset: ["start end", "end 70%"],
  });

  //cor do início (roxo) para o final (rosa)
  const lineColor = useTransform(scrollPipe, [0, 1], ["#6a11cb", "#ff007f"]);

  ////animacao title
  const { refTitle, scale, opacity } = useScrollTitle({
    scaleRange: [4, 1],
    opacityRange: [0, 1],
  });

  return (
    <section className="container-about">
      <div className="title">
        <motion.h1
          ref={refTitle}
          style={{
            scale,
            opacity,
          }}
        >
          <span className="key-title">&#123; </span>Sobre
          <span className="key-title"> &#125;</span>
        </motion.h1>
      </div>

      <div className="content">
        <div className="about-text">
          <motion.div
            ref={refPipe}
            className="pipe"
            style={{
              scaleY: scrollPipe,
              width: "50px",
              borderRadius: "4px",
              backgroundColor: lineColor,
              transformOrigin: "0%",
            }}
          ></motion.div>

          <div className="wrap-about-btn-resume">
            <p>
              Apaixonado por tecnologia e pela criação de soluções que realmente
              fazem a diferença, venho me dedicando ao desenvolvimento web há
              mais de um ano, com foco em React, Node.js, TypeScript e Next.js.
              Atualmente, curso Análise e Desenvolvimento de Sistemas, e meu
              objetivo é continuar evoluindo como desenvolvedor fullstack,
              unindo boas práticas, performance e design funcional. No futuro,
              pretendo expandir minha atuação também para o desenvolvimento
              mobile, buscando criar experiências completas e conectadas entre
              web e mobile
              <span className="about-dot">.</span>
            </p>
            <div>
              <a
                href="/resumo.pdf"
                download
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <Button py="1rem" color="#7f00ff">
                  Download Resumo
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="about-img">
          <div className="wrap-cube-about">
            <InteractiveCube />
          </div>
        </div>
      </div>
    </section>
  );
};
