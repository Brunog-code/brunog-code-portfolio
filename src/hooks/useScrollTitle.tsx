import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ScrollOffset =
  | "start start"
  | "start end"
  | "start center"
  | "end start"
  | "end end"
  | "end center"
  | `${number}% ${number}%`
  | `${number}px ${number}px`
  | `${number}vw ${number}vh`
  | `${number} ${number}`;

interface ITitleFadeInProps {
  scaleRange?: [number, number];
  opacityRange?: [number, number];
  offset?: [ScrollOffset, ScrollOffset];
}

export const useScrollTitle = ({
  scaleRange = [4, 1],
  opacityRange = [0, 1],
  offset = ["start end", "end center"],
}: ITitleFadeInProps) => {
  const refTitle = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: refTitle,
    offset,
  });

  const scale = useTransform(scrollYProgress, [0, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 1], opacityRange);

  return { refTitle, scale, opacity };
};
