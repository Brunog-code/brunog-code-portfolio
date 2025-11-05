import { motion } from "framer-motion";

//loading pagina
export const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
      }}
    >
      <motion.div
        style={{
          width: 50,
          height: 50,
          border: "5px solid #7f00ff",
          borderTop: "5px solid transparent",
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
    </div>
  );
};

//loading botao
export const LoadingButton = () => {
  return (
    <motion.div
      style={{
        width: 16,
        height: 16,
        border: "2px solid #fff",
        borderTop: "2px solid transparent",
        borderRadius: "50%",
        margin: "0 auto",
      }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
    />
  );
};
