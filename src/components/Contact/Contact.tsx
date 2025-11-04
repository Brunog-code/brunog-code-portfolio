import { Button } from "../Button/Button";
import { toast } from "react-toastify";
import "./contact.css";

export const Contact = () => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //pega o form atual
    const form = e.currentTarget;

    const name = (form[0] as HTMLInputElement).value.trim();
    const email = (form[1] as HTMLInputElement).value.trim();
    const message = (form[2] as HTMLTextAreaElement).value.trim();

    if (!name || !email || !message) {
      toast.error("Preencha todos os campos");
      return;
    }

    //validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Email inválido!");
      return;
    }

    //firebase
  };

  return (
    <section className="container-contact">
      <div className="title">
        <h1>
          <span className="key-title">&#123; </span>Contato
          <span className="key-title"> &#125;</span>
        </h1>
      </div>

      <article className="contact-wrap-content">
        <div className="contact-content-form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Mensagem" />
            <Button type="submit" py="1rem">
              Enviar
            </Button>
          </form>
        </div>
        <div className="contact-content-world-techs">3d three</div>
      </article>
    </section>
  );
};
