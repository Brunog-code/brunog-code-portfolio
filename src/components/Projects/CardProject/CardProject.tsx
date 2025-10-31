import { MotionValue, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./cardProject.css";

// Define as props que o componente recebe
interface CardProjectProps {
  proj: { title: string; desc: string };
  index: number;
  lineHeight: MotionValue<number>;
}

export const CardProject = ({ proj, index, lineHeight }: CardProjectProps) => {
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
        // calcula o ponto central do card
        const offsetTop =
          cardRef.current.offsetTop + cardRef.current.offsetHeight / 2;

        // se a altura da linha for maior ou igual ao centro do card, ativa o marker
        setActive(value >= offsetTop);
      }
    });

    // cleanup: remove o listener quando o componente desmonta
    return () => unsubscribe();
  }, [lineHeight]);

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
        <h3>{proj.title}</h3>
        <p>{proj.desc}</p>
      </div>
    </motion.div>
  );
};
