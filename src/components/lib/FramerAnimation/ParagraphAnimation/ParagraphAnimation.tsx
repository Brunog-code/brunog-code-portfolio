import { useRef } from "react";
import "./paragraphAnimation.css";
import { useScroll, motion, MotionValue, useTransform } from "framer-motion";

interface IParagraphAnimationProps {
  value: string;
}

export const ParagraphAnimation = ({ value }: IParagraphAnimationProps) => {
  const element = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "end 0.65"],
  });

  //Divide o texto do parágrafo em um array de palavras para animar uma por uma.
  const words = value.split(" ");

  return (
    <p ref={element} className="paragraph-animation-text">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

type WordProps = {
  children: React.ReactNode;
  range: number[];
  progress: MotionValue<number>;
};

export const Word = ({ children, range, progress }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="paragraph-animation-word">
      {/* "shadow" pode ser uma sombra ou duplicata da palavra, pra dar efeito de fade */}
      <span className="paragraph-animation-shadow">{children}</span>

      {/* motion.span: elemento animado; a opacidade muda com o scroll */}
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
