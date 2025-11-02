import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Technologies } from "../../components/Technologies/Technologies";
import { Projects } from "../../components/Projects/Projects";
import { ScrollBarAnimation } from "../../components/lib/FramerAnimation/ScrollBarAnimation/ScrollBarAnimation";
import { Element } from "react-scroll";

import "./home.css";

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
      </main>
    </section>
  );
};
