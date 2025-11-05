import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import "./projectDetails.css";
import { Button } from "../../components/Button/Button";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useEffect, useState } from "react";
import { techList } from "../../data/techList";
import { LoadingPage } from "../../components/lib/FramerAnimation/Loading/Loading";
import { SlidesFade } from "../../components/lib/Swiper/Slides";
import { Footer } from "../../components/Footer/Footer";

type ProjectImage = {
  caption: string;
  url: string;
};

type ProjectDeploy = {
  frontend: string;
  backend: string;
};

type ProjectType = {
  id: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  images: ProjectImage[];
  repo: string;
  link: string;
  github: string;
  techs: string[];
  deploy: ProjectDeploy;
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //states
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [project, setProject] = useState<ProjectType | undefined>(undefined);

  //procurar o projeto no obj
  useEffect(() => {
    if (!id) return;
    const foundProject = projectsData.find((project) => project.id === id);
    console.log("Projeto encontrado:", foundProject);
    if (!foundProject) {
      setIsError("Projeto não encontrado");
    } else {
      setProject(foundProject);
    }
    setIsLoading(false);
  }, [id]);

  //componente carregando
  if (isLoading) {
    return <LoadingPage />;
  }

  //se erro
  if (isError) {
    return (
      <section className="container-project-details">
        <header className="projects-details-header">
          <div className="project-details-container-logo">
            <Button
              onClick={() =>
                navigate("/", { state: { scrollToProjects: true } })
              }
            >
              <FiArrowLeft size={20} style={{ marginRight: "0.3rem" }} />
              Voltar aos projetos
            </Button>
          </div>
        </header>

        <div
          className="error-message"
          style={{ padding: "2rem", textAlign: "center" }}
        >
          <h2>{isError}</h2>
          <p>Ocorreu um problema ao carregar o projeto.</p>
        </div>
      </section>
    );
  }

  //se tudo certo
  return (
    <section className="container-project-details">
      {/* header */}
      <header className="projects-details-header">
        {/* imagem */}
        <div className="project-details-container-logo">
          <Button
            onClick={() => navigate("/", { state: { scrollToProjects: true } })}
          >
            <FiArrowLeft size={20} style={{ marginRight: "0.3rem" }} />
            Voltar aos projetos
          </Button>

          <span className="text-logo">
            Portfólio{" "}
            <span className="name-logo">
              BrunoGonçalves<span className="symbol-logo">/&gt;</span>
            </span>
          </span>
        </div>
      </header>

      {/* content */}
      <article className="projects-details-content">
        {/* header content */}
        <div className="projects-details-content-header">
          {/* title header */}
          <div className="details-title">
            {project && <h1>{project.title}</h1>}
            {project && <h3>{project.subtitle}</h3>}
            <div className="wrap-tech-icons">
              {techList
                .filter((tech) => project?.techs.includes(tech.name))
                .map((tech, index) => (
                  <span key={index}>{tech.icon}</span>
                ))}
            </div>

            <div className="details-links">
              <a href={project?.link} target="_blank" rel="noopener noreferrer">
                Link Projeto
                <FiExternalLink size={18} style={{ marginLeft: "0.4rem" }} />
              </a>

              <a
                href={project?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Repositório
                <FiExternalLink size={19} style={{ marginLeft: "0.4rem" }} />
              </a>
            </div>

            <div className="details-deploy">
              <h3>Deploy:</h3>
              {project?.deploy.frontend != "" && (
                <p>
                  Front-end:{" "}
                  <span className="details-deploy-name">
                    {project?.deploy.frontend}
                  </span>
                </p>
              )}

              {project?.deploy.backend != "" && (
                <p>
                  Back-end:{" "}
                  <span className="details-deploy-name">
                    {project?.deploy.backend}
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* imagem  header */}
          <div className="details-img">
            <SlidesFade images={project!.images} />
          </div>
        </div>

        {/* main content */}
        <div className="projects-details-content-main">
          <div className="projects-details-content-main-title">
            <h1>
              {" "}
              <span className="bracket">&#91; </span>Detalhes do Projeto
              <span className="bracket"> &#93;</span>
            </h1>
          </div>
        </div>
      </article>
      <Footer />
    </section>
  );
};
