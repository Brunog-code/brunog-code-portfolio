import { motion, useScroll } from "framer-motion";

export const ScrollBarAnimation = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: 8,
        backgroundColor: "#ff007f",
        transformOrigin: "0%",
        zIndex: 99999,
      }}
    ></motion.div>
  );
};
