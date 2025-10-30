import { v4 as uuidv4 } from "uuid";

export const projects = [
  {
    id: uuidv4(),
    title: "Meu Portfólio",
    description: "Um portfólio pessoal feito com React e Three.js.",
    image: "/images/portfolio.png", // caminho da imagem na pasta public
    link: "https://meu-portfolio.com",
    github: "https://github.com/seuusuario/portfolio",
    techs: ["React", "Three.js", "TypeScript"],
  },
];
