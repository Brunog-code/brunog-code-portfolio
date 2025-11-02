import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import "./projectDetails.css";
import { Button } from "../../components/Button/Button";
import { FiArrowLeft } from "react-icons/fi";
import { useEffect, useState } from "react";
import { base64ToUtf8 } from "../../utils/base64ToUtf8";
import { techList } from "../../data/techList";

type ProjectType = {
  id: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  repo: string;
  link: string;
  github: string;
  techs: string[];
};

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  //states
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [project, setProject] = useState<ProjectType | undefined>(undefined);
  const [readme, setReadme] = useState("");

  //usuario gitHub
  const userGithub = "Brunog-code";

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

  //requisicao github
  useEffect(() => {
    if (!project?.repo) {
      setIsLoading(false);
      return;
    }

    const fetchGitHubData = async () => {
      try {
        const url = `https://api.github.com/repos/${userGithub}/${project.repo}/readme`;
        const response = await fetch(url);
        const data = await response.json();

        //O conteúdo vem em base64, precisa decodificar:
        const decodedContent = base64ToUtf8(data.content);
        // console.log(decodedContent);

        setReadme(decodedContent);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsError(`Falha ao carregar dados do GitHub}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, [project, userGithub]);

  if (isLoading) {
    return <p>Carregando....</p>;
  }

  return (
    <section className="container-project-details">
      {/* header */}
      <header className="projects-details-header">
        {/* imagem */}
        <div className="project-details-container-logo">
          <Button onClick={() => navigate("/")}>
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

            {techList
              .filter((tech) => project?.techs.includes(tech.name))
              .map((tech, index) => (
                <span key={index}>{tech.icon}</span>
              ))}
          </div>
          {/* imagem  header */}
          <div className="details-img">imagem</div>
        </div>
      </article>
    </section>
  );
};
