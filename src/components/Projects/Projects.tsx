import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { CardProject } from "./CardProject/CardProject";
import "./projects.css";
import { projectsData } from "../../data/projectsData";
import { Button } from "../Button/Button";

export const Projects = () => {
  //verifica se é mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    //chama uma vez no mount, caso já esteja em mobile
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", `end ${isMobile ? "start" : "center"}`],
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

  //filtro
  const [filter, setFilter] = useState("all");
  const filteredStack = useMemo(() => {
    if (filter === "all") return projectsData;

    return projectsData.filter((project) => project.category == filter);
  }, [filter]);

  const handleFilterChange = (newFilter: string) => {
    const scrollPos = window.scrollY;
    setFilter(newFilter);

    //restaura posição do scroll após re-render
    requestAnimationFrame(() => {
      window.scrollTo({ top: scrollPos });
    });
  };

  return (
    <section ref={ref} className="container-projects" id="projects">
      <div className="title">
        <h1>
          <span className="key-title">&#123; </span>Projetos
          <span className="key-title"> &#125;</span>
        </h1>
      </div>

      <div className="projects-desc">
        <p>
          Nesta seção, apresento alguns dos meus projetos organizados em uma
          timeline por ordem de desenvolvimento. Cada projeto reflete uma etapa
          da minha evolução como desenvolvedor, mostrando minhas habilidades,
          aprendizados e experiências adquiridas ao longo do tempo. Filtre por
          stack desejada
          <span className="project-dot">.</span>
        </p>
      </div>

      <div className="projects-filter">
        <Button px="1rem" py="1rem" onClick={() => handleFilterChange("all")}>
          Todas
        </Button>
        <Button
          px="1rem"
          py="1rem"
          onClick={() => handleFilterChange("Front-end")}
        >
          Front-end
        </Button>
        <Button
          px="1rem"
          py="1rem"
          onClick={() => handleFilterChange("Fullstack")}
        >
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
        {filteredStack?.map((proj, i) => (
          <CardProject
            key={proj.id}
            proj={proj}
            index={i}
            lineHeight={lineHeightPx}
          />
        ))}
      </div>
    </section>
  );
};
