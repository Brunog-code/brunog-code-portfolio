// components/Effects/Scroll3DEffect.tsx
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./scroll3dZoom.css";
import bgCircle from "../../../../assets/bgCircle.png";

gsap.registerPlugin(ScrollTrigger);

interface Scroll3DEffectProps {
  children: React.ReactNode;
}

export const Scroll3DEffect = ({ children }: Scroll3DEffectProps) => {
  const imgContainer = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLImageElement>(null);
  const text1 = useRef<HTMLHeadingElement>(null);
  const text2 = useRef<HTMLParagraphElement>(null);
  const content = useRef<HTMLDivElement>(null);
  // const bg1 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!content.current || !img.current || !imgContainer.current) return;

      // ScrollTrigger.create({
      //   trigger: bg1.current,
      //   pin: bg1.current,
      //   pinSpacing: false,
      //   start: "top top",
      //   endTrigger: ".last",
      //   end: "bottom bottom",
      // });

      gsap.set(content.current, { opacity: 0, yPercent: 50 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: imgContainer.current,
            pin: imgContainer.current,
            pinSpacing: false,
            scrub: 1,
            start: "0% 0%",
            end: "+=500", //mantém o zoom suave
          },
        })
        // zoom do círculo
        .to(
          img.current,
          { transform: "translateZ(2200px)", ease: "power2.inOut" },
          0
        )
        // fade dos textos
        .to(text1.current, { y: -800, opacity: 0, ease: "power2.out" }, 0.05)
        .to(text2.current, { y: -800, opacity: 0, ease: "power2.out" }, 0.08)
        // 👇 conteúdo começa a aparecer ANTES do zoom acabar
        .to(
          content.current,
          {
            opacity: 1,
            yPercent: 0,
            ease: "power2.out",
            duration: 0.6,
          },
          "-=0.60" // ⬅️começa 55% antes do fim da animação anterior
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll3d-wrapper">
      {/* Fundo fixo escuro */}
      {/* <div ref={bg1} className="bg-color-zoom"></div> */}

      <section>
        {/* Container com perspectiva 3D */}
        <div ref={imgContainer} className="scroll3d-img-container">
          <img
            ref={img}
            src={bgCircle}
            className="scroll3d-img-bg"
            alt="background"
          />

          {/* Texto sobreposto */}
          <div className="overlay-text">
            <h1 ref={text1}>
              <span className="text-stroke">Dev</span> Journey
            </h1>
            <p ref={text2}>Projetos que contam a história do meu crescimento profissional e da minha paixão por criar.</p>
          </div>
        </div>

        {/* conteudo do projects */}
        <div ref={content} className="main-content">
          {children}
        </div>
      </section>
    </div>
  );
};
