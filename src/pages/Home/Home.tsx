import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Technologies } from "../../components/Technologies/Technologies";
import { Projects } from "../../components/Projects/Projects";
import { ScrollBarAnimation } from "../../components/ScrollBarAnimation/ScrollBarAnimation";

import "./home.css";

export const Home = () => {
  return (
    <>
      {/* Barra de progresso fixada */}
      <ScrollBarAnimation />
      <Header />
      <main className="page-content">
        <Hero />
        <Technologies />
        <About />
        <Projects />
      </main>
    </>
  );
};
