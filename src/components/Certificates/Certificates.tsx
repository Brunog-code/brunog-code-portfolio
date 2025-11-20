import "./certificates.css";
import { CardCourse } from "./CardCourse/CardCourse";
import { formation, courses } from "../../data/coursesData";
import { FadeIn } from "../lib/Gsap/FadeIn";
import { useRef } from "react";

export const Certificates = () => {
  const cardCourseRef = useRef<HTMLDivElement>(null);
  const cardFormRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container-certificates">
      <div className="wrap-formation">
        <h2>
          <span className="bracket">&#91;</span>Formação
          <span className="bracket">&#93;</span>
        </h2>
        <FadeIn ref={cardFormRef} x={-200} duration={1}>
          {formation.map((f) => (
            <div key={f.id}>
              <CardCourse data={f} />
            </div>
          ))}
        </FadeIn>
      </div>

      <div className="wrap-courses">
        <h2>
          <span className="bracket">&#91;</span>Cursos complementares
          <span className="bracket">&#93;</span>
        </h2>

        <FadeIn ref={cardCourseRef} x={-200} duration={1}>
          <div className="wrap-card">
            {courses.map((c) => (
              <div key={c.id}>
                <CardCourse data={c} />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
