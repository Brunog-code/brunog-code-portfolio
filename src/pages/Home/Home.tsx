import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Technologies } from "../../components/Technologies/Technologies";
import { Projects } from "../../components/Projects/Projects";
import { ScrollBarAnimation } from "../../components/lib/FramerAnimation/ScrollBarAnimation/ScrollBarAnimation";
import { Element } from "react-scroll";

import "./home.css";
import { Contact } from "../../components/Contact/Contact";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
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
