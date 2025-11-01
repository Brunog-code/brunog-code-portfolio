import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import "./projectDetails.css";
import { Button } from "../../components/Button/Button";
import { FiHome } from "react-icons/fi";
import { useEffect, useState } from "react";
import { base64ToUtf8 } from "../../utils/base64ToUtf8";

export const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);

  //usuario gitHub
  const userGithub = "Brunog-code";

  //procurar o projeto no obj
  const repositoryGithub = projectsData
    .filter((project) => project.id === id)
    .map((project) => project.repo);

  const url = `https://api.github.com/repos/${userGithub}/${repositoryGithub}/readme`;

  //requisicao github
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        //O conteúdo vem em base64, precisa decodificar:
        const decodedContent = base64ToUtf8(data.content);
        console.log(decodedContent);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, [url]);

  if (isLoading) {
    return <p>Carregando....</p>;
  }

  return (
    <section className="container-project-details">
      <header>
        {/* imagem */}
        <div className="project-details-container-logo">
          <Button onClick={() => navigate("/")}>
            <FiHome size={20} style={{ marginRight: "0.3rem" }} />
            Home
          </Button>

          <span className="text-logo">
            Portfólio{" "}
            <span className="name-logo">
              BrunoGonçalves<span className="symbol-logo">/&gt;</span>
            </span>
          </span>
        </div>
      </header>

      <article></article>
    </section>
  );
};
