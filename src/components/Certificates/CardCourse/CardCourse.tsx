import "./cardCourse.css";
import { Button } from "../../Button/Button";
import { FiExternalLink } from "react-icons/fi";

// type Status = "Cursando" | "Finalizado";

// interface ICertificateProps {
//   id: string;
//   title: string;
//   institution: string;
//   status: Status;
//   date: string;
//   img: string;
// }


export const CardCourse = () => {


  return (
    <div className="container-card-course">

      <div className="wrap-img-course">
        <img src="https://i.imgur.com/0pBMS5f.jpeg" alt="" />
      </div>

      <div className="wrap-content-course">
        <h3>Análise e desenvolvimento de sistemas</h3>
        <p>Faculdade Anhnaguera de Piracicaba</p>
        <p>
          Status: <span>Cursando</span>
        </p>
        <p>Finalização: 2026</p>
        <div className="wrap-btn-course-action">
          <Button>
            Certificado
            <FiExternalLink size={20} style={{ marginLeft: "s0.1rem" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};
