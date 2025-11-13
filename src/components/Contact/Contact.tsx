import { Button } from "../Button/Button";
import { toast } from "react-toastify";
import "./contact.css";
import { db } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { LoadingButton } from "../lib/FramerAnimation/Loading/Loading";
import { useState, useEffect } from "react";
import { useScrollTitle } from "../../hooks/useScrollTitle";
import { motion } from "framer-motion";
import { TechOrbit } from "../lib/Three/TechOrbit";
import { SiWhatsapp } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Verifica se o navegador suporta WebGL
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) setIsWebGLSupported(false);
  }, []);

  //verifica se é mobile
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const name = (form[0] as HTMLInputElement).value.trim();
    const email = (form[1] as HTMLInputElement).value.trim();
    const message = (form[2] as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      toast.error("Preencha todos os campos");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email inválido!");
      setIsLoading(false);
      return;
    }

    try {
      await addDoc(collection(db, "portfolioMessages"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });
      toast.success("Mensagem enviada com sucesso!");
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar mensagem");
    } finally {
      setIsLoading(false);
    }
  };

  // animação do título
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
          <div className="wrap-contacts">
            <span className="contact-link link-email">
              <MdEmail size={22} style={{ marginRight: "8px" }} />
              <a href="mailto:brunogon.silva@hotmail.com">Enviar email</a>
            </span>
            <span className="contact-link link-whats">
              <SiWhatsapp size={22} style={{ marginRight: "8px" }} />
              <a href="https://wa.me/5519999107390" target="_blank">
                Conversar no WhatsApp
              </a>
            </span>
          </div>
          <div className="contact-info">
            <span>
              Ou se preferir, preencha o formulário abaixo
              <span className="contact-dot">.</span>
            </span>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Mensagem" />
            <Button type="submit" py="1rem" disabled={isLoading}>
              {isLoading ? <LoadingButton /> : "Enviar"}
            </Button>
          </form>
        </div>

        <div className="contact-content-world-techs">
          {isWebGLSupported && !isMobile ? (
            <TechOrbit />
          ) : (
            <div className="wrap-img-fallback-contact">
              <img
                src="/tel-fallback.png"
                alt="Imagem-telefone-fallback globo-terrestre"
                className="fallback-orbit"
              />
            </div>
          )}
        </div>
      </article>
    </section>
  );
};
