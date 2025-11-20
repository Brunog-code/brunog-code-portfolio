import "./certificates.css";
import { CardCourse } from "./CardCourse/CardCourse";
import { formation, courses } from "../../data/coursesData";

export const Certificates = () => {
  return (
    <div className="container-certificates">
      <div className="wrap-formation">
        <h2>
          <span className="bracket">&#91;</span>Formação
          <span className="bracket">&#93;</span>
        </h2>
        {formation.map((f) => (
          <div key={f.id}>
            <CardCourse data={f}/>
          </div>
        ))}
      </div>

      <div className="wrap-courses">
        <h2>
          <span className="bracket">&#91;</span>Cursos complementares
          <span className="bracket">&#93;</span>
        </h2>
        <div className="wrap-card">
          {courses.map((c) => (
            <div key={c.id}>
              <CardCourse data={c}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
