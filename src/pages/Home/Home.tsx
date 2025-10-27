import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Technologies } from "../../components/technologies/Technologies";

import "./home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <Hero />
        <Technologies />
      </main>
    </>
  );
};
