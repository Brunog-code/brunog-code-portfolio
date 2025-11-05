import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Technologies } from "../../components/Technologies/Technologies";
import { Projects } from "../../components/Projects/Projects";
import { ScrollBarAnimation } from "../../components/lib/FramerAnimation/ScrollBarAnimation/ScrollBarAnimation";
import { Element } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.css";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";
import { useEffect } from "react";

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Verifica se o state existe
    if (location.state?.scrollToProjects) {
      // 2. Faz o scroll
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      // 3. Limpa o state
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <section>
      {/* Barra de progresso fixada */}
      <ScrollBarAnimation />
      <Header />
      <main className="page-content">
        <Element name="hero">
          <Hero />
        </Element>

        <Technologies />

        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
      <Footer />
    </section>
  );
};
