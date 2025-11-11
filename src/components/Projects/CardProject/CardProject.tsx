import { MotionValue, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./cardProject.css";
import { Button } from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { techList } from "../../../data/techList";

// Define as props que o componente recebe

type ProjectImage = {
  caption: string;
  url: string;
};
interface CardProjectProps {
  proj: {
    id: string;
    date: string;
    title: string;
    subtitle: string;
    thumbnail: string;
    images: ProjectImage[];
    video?: string;
    link: string;
    repo: string;
    github: string;
    techs: string[];
    deploy: Record<string, string>;
    content: string[];
    highlights: string[];
  };
  index: number;
  lineHeight: MotionValue<number>;
}

export const CardProject = ({ proj, index, lineHeight }: CardProjectProps) => {
  const navigate = useNavigate();

  const cardRef = useRef<HTMLDivElement | null>(null);

  //checa se o card entrou na viewport, usado para animação de entrada
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  //estado para ativar/desativar o marker
  const [active, setActive] = useState(false);

  //useEffect para monitorar a altura da linha central e ativar o marker
  useEffect(() => {
    //subscribe para mudanças do valor da linha animada
    const unsubscribe = lineHeight.on("change", (value) => {
      if (cardRef.current) {
        //calcula o ponto central do card
        const offsetTop =
          cardRef.current.offsetTop + cardRef.current.offsetHeight / 2;

        const triggerOffset = window.innerHeight * 0.5; // 50% da viewport
        //se a altura da linha for maior ou igual ao centro do card, ativa o marker
        setActive(value >= offsetTop - triggerOffset);
      }
    });

    // cleanup: remove o listener quando o componente desmonta
    return () => unsubscribe();
  }, [lineHeight]);

  //redireciona até page do projeto
  const onViewProject = (id: string) => {
    navigate(`/projeto/${id}`);
  };

  return (
    <motion.div
      ref={cardRef} //referência para medir posição
      className={`cardproject ${index % 2 === 0 ? "left" : "right"}`} // alterna lado
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // animação inicial (fora da tela)
      animate={isInView ? { opacity: 1, x: 0 } : {}} // animação quando entra na viewport
      transition={{ duration: 0.7 }}
    >
      {/* Marker do card, ativado quando a linha chega */}
      <div className={`marker ${active ? "active" : ""}`} />

      {/* Conteúdo do card */}
      <div className="card-body">
        <div className="card-body-img-wrapper">
          <img src={proj.thumbnail} alt={proj.title} />
        </div>

        <p>
          <span>Finalizado em: </span>
          {proj.date}
        </p>
        <h3>{proj.title}</h3>
        <p>{proj.subtitle}</p>
        <div className="card-body-tech">
          {techList
            .filter((tech) => proj.techs.includes(tech.name))
            .map((tech, index) => (
              <span key={index}>{tech.icon}</span>
            ))}
        </div>
        <div className="card-body-buttons">
          <Button px="1rem" py="1rem" onClick={() => onViewProject(proj.id)}>
            Ver projeto
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
