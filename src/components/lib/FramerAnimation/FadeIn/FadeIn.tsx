import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  direction?: "left" | "right" | "bottom" | "top" | "none";
  delay?: number;
  duration?: number;
};

export const FadeIn = ({
  children,
  direction = "bottom",
  delay = 0.2,
  duration = 0.9,
}: FadeInProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? -80
          : direction === "right"
          ? 80
          : direction === "none"
          ? 0
          : 0,
      y:
        direction === "bottom"
          ? 80
          : direction === "top"
          ? -80
          : direction === "none"
          ? 0
          : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
