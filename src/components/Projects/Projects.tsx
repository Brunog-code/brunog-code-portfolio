import { useRef } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { CardProject } from "./CardProject/CardProject";
import "./projects.css";
import { projectsData } from "../../data/projectsData";
import { Button } from "../Button/Button";

// const projects = [
//   {
//     title: "Sistema de Locadora",
//     desc: "Aplicação completa com Node.js, MySQL e interface web.",
//   },
//   {
//     title: "Gerador de Senhas",
//     desc: "Ferramenta feita em React para criar senhas seguras.",
//   },
//   {
//     title: "Dashboard de Corridas",
//     desc: "Sistema de relatórios com PHP e MySQL.",
//   },
//   {
//     title: "Portfólio 3D",
//     desc: "Portfólio pessoal com animações em Three.js.",
//   },
// ];

export const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const lineHeightPx = useMotionValue(0);

  lineHeight.on("change", (value) => {
    if (ref.current) {
      const totalHeight = ref.current.offsetHeight;
      const numeric = (parseFloat(value) / 100) * totalHeight;
      lineHeightPx.set(numeric);
    }
  });

  return (
    <section ref={ref} className="container-projects">
      <div className="title">
        <h1>
          <span className="key-title">&#123; </span>Projetos
          <span className="key-title"> &#125;</span>
        </h1>
      </div>

      <div className="projects-desc">
        <p>
          {" "}
          Nesta seção, apresento alguns dos meus projetos organizados em uma
          timeline por ordem de desenvolvimento. Cada projeto reflete uma etapa
          da minha evolução como desenvolvedor, mostrando minhas habilidades,
          aprendizados e experiências adquiridas ao longo do tempo.
        </p>
      </div>

      <div className="projects-filter">
        <Button px="2rem" py="1rem">
          Front-end
        </Button>
        <Button px="2rem" py="1rem">
          Fullstack
        </Button>
      </div>

      {/* Linha central */}
      <div className="projects-line">
        <motion.div
          className="projects-progress"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Cards */}
      <div className="projects-content">
        {projectsData.map((proj, i) => (
          <CardProject
            key={i}
            proj={proj}
            index={i}
            lineHeight={lineHeightPx}
          />
        ))}
      </div>
    </section>
  );
};
