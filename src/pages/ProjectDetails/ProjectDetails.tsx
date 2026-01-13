import { useParams, useNavigate } from "react-router-dom";
import { IProjectsData, projectsData } from "../../data/projectsData";
import "./projectDetails.css";
import { Button } from "../../components/Button/Button";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { useEffect, useState } from "react";
import { techList } from "../../data/techList";
import { LoadingPage } from "../../components/lib/FramerAnimation/Loading/Loading";
import { SlidesFade } from "../../components/lib/Swiper/Slides";
import { Footer } from "../../components/Footer/Footer";
import { ScrollBarAnimation } from "../../components/lib/FramerAnimation/ScrollBarAnimation/ScrollBarAnimation";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //states
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [project, setProject] = useState<IProjectsData | undefined>(undefined);

  //procurar o projeto no obj
  useEffect(() => {
    if (!id) return;

    const foundProject = projectsData.find((project) => project.id === id);

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
      <ScrollBarAnimation />
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
              <span className="bracket">&#91;</span>Detalhes do Projeto
              <span className="bracket">&#93;</span>
            </h1>
          </div>

          <div className="projects-details-content-main-text">
            {project!.content.map((paragraph, index) =>
              index == 1 ? (
                // table
                <table key={index}>
                  <thead>
                    <tr>
                      <th>Tecnologia utilizadas</th>
                      <th>Badge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {techList
                      .filter((tech) => project?.techs.includes(tech.name))
                      .map((tech, i) => (
                        <tr key={i}>
                          <td>{tech.name}</td>
                          <td>{tech.icon}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : index == 2 ? (
                <div key={index}>
                  <p>{paragraph}</p>

                  <ul className="list-highlights">
                    <h2>Destaques</h2>
                    {project?.highlights.map((high, i) => (
                      <li key={i}>{high}</li>
                    ))}
                  </ul>
                </div>
              ) : index == 3 ? (
                <div key={index}>
                  <p>{paragraph}</p>
                  <div className="container-img-content">
                    <img
                      src={project?.images[0].url}
                      alt={project?.images[0].caption}
                    />
                  </div>
                </div>
              ) : (
                // paragraph
                <p key={index}>{paragraph}</p>
              )
            )}
            {project?.video && (
              <div className="container-video">
                <iframe
                  src={project.video.replace("watch?v=", "embed/")}
                  title={project?.title || "Vídeo do projeto"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
        <div className="footer-details">
          <span className="footer-details-container-github">
            Para mais detalhes, entre no repositório do projeto
            {techList.map(
              (tech, i) =>
                tech.name == "GitHub" && (
                  <a
                    key={i}
                    href={project?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Ver código relacionado a ${tech.name}`}
                    className="tech-icon-link"
                  >
                    <span className="footer-details-icon-github">
                      {tech.icon}
                    </span>
                  </a>
                )
            )}
          </span>
        </div>
      </article>
      <Footer />
    </section>
  );
};
