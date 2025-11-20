import "./cardCourse.css";
import { FiExternalLink } from "react-icons/fi";

interface ICertificateProps {
  id: string;
  title: string;
  institution: string;
  status: string;
  date: string;
  img: string;
  certificate: string;
}

interface IData {
  data: ICertificateProps;
}

export const CardCourse = ({ data }: IData) => {
  return (
    <div className="container-card-course">
      <div className="wrap-img-course">
        <img src={data.img} alt={data.title} />
      </div>

      <div className="wrap-content-course">
        <h3>{data.title}</h3>
        <p className="wrap-content-course-institution">{data.institution}</p>
        <p>
          Status:{" "}
          <span
            className={`${
              data.status == "Cursando"
                ? "course-in-progress"
                : "course-finally"
            }`}
          >
            {data.status}
          </span>
        </p>
        <p>
          Finalização:{" "}
          <span className="wrap-content-course-date">{data.date}</span>
        </p>
        {data.status == "Finalizado" && (
          <div className="wrap-btn-course-action">
            <a
              href={data.certificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificado
              <FiExternalLink size={20} style={{ marginLeft: "s0.1rem" }} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
