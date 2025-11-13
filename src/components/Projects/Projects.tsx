import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { CardProject } from "./CardProject/CardProject";
import "./projects.css";
import { projectsData } from "../../data/projectsData";
import { Button } from "../Button/Button";
import { Scroll3DEffect } from "../lib/Gsap/Scroll3dZoom/Scroll3dZoom";


export const Projects = () => {
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
    <Scroll3DEffect>
      <section ref={ref} className="container-projects" id="projects">
        <div className="projects-filter">
          <div>
            <p>Filtre pela categoria</p>
          </div>

          <div className="btns-filter">
            <Button
              px="1rem"
              py="1rem"
              onClick={() => handleFilterChange("all")}
              active={filter == "all" && true}
            >
              Todos
            </Button>
            <Button
              px="1rem"
              py="1rem"
              onClick={() => handleFilterChange("Front-end")}
              active={filter == "Front-end" && true}
            >
              Front-end
            </Button>
            <Button
              px="1rem"
              py="1rem"
              onClick={() => handleFilterChange("Fullstack")}
              active={filter == "Fullstack" && true}
            >
              Fullstack
            </Button>
          </div>
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
    </Scroll3DEffect>
  );
};
