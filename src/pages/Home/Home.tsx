import { useEffect } from "react";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { About } from "../../components/About/About";
import { Technologies } from "../../components/Technologies/Technologies";
import { Projects } from "../../components/Projects/Projects";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import "./home.css";

export const Home = () => {
  useEffect(() => {
    const container = document.querySelector("[data-scroll-container]");

    const initScroll = () => {
      if (container) {
        new LocomotiveScroll({
          el: container,
          // smooth: true,
          // smartphone: {
          //   smooth: true, // ou true, se quiser smooth no mobile
          // },
          // tablet: {
          //   smooth: true, // smooth para tablet
          // },
        });
      }
    };

    // espera imagens carregarem
    window.addEventListener("load", initScroll);

    return () => window.removeEventListener("load", initScroll);
  }, []);

  return (
    <>
      <Header />
      <main className="page-content" data-scroll-container>
        <Hero />
        <Technologies />
        <About />
        <Projects />
      </main>
    </>
  );
};
