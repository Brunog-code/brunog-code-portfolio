import { Button } from "../Button/Button";
import { toast } from "react-toastify";
import "./contact.css";
import { db } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { LoadingButton } from "../lib/FramerAnimation/Loading/Loading";
import { useRef, useState } from "react";
import { FadeIn } from "../lib/Gsap/FadeIn";
import { useScrollTitle } from "../../hooks/useScrollTitle";
import { motion } from "framer-motion";
import { TechOrbit } from "../lib/Three/TechOrbit";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    //pega o form atual
    const form = e.currentTarget;

    const name = (form[0] as HTMLInputElement).value.trim();
    const email = (form[1] as HTMLInputElement).value.trim();
    const message = (form[2] as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      toast.error("Preencha todos os campos");
      setIsLoading(false);
      return;
    }

    //validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email inválido!");
      setIsLoading(false);
      return;
    }

    //firebase
    try {
      await addDoc(collection(db, "portfolioMessages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      toast.success("Mensagem enviada com sucesso");

      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar email");
    } finally {
      setIsLoading(false);
    }
  };

  ///animacao title
  const { refTitle, scale, opacity } = useScrollTitle({
    scaleRange: [4, 1],
    opacityRange: [0, 1],
  });

  return (
    <section className="container-contact">

      <div className="title">
        <motion.h1
          ref={refTitle}
          style={{
            scale,
            opacity,
          }}
        >
          <span className="key-title">&#123; </span>Contato
          <span className="key-title"> &#125;</span>
        </motion.h1>
      </div>

      <article className="contact-wrap-content">
        
        <div className="contact-content-form">
          <FadeIn ref={formRef} x={-300} width="100%">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Email" />
              <textarea placeholder="Mensagem" />
              <Button type="submit" py="1rem" disabled={isLoading}>
                {isLoading ? <LoadingButton /> : "Enviar"}
              </Button>
            </form>
          </FadeIn>
        </div>

        <div className="contact-content-world-techs">
          < TechOrbit />
          </div>
      </article>
    </section>
  );
};
