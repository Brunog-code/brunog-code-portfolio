import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { forwardRef, useEffect } from "react";

interface IFadeInProps {
  opacity?: number;
  x?: number;
  y?: number;
  duration?: number;
  delay?: number;
  ease?: string;
  width?: string | number; // 👈 adiciona o width como opcional
  children: React.ReactNode;
}

export const FadeIn = forwardRef<HTMLDivElement, IFadeInProps>(
  (
    {
      opacity = 0,
      x = 0,
      y = 0,
      duration = 1,
      delay = 0.5,
      ease = "power2.out",
      width, // 👈 recebe opcionalmente
      children,
    },
    ref
  ) => {
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      const element = (ref as React.RefObject<HTMLDivElement>)?.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          element,
          {
            opacity,
            x,
            y,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            ease,
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            clearProps: "transform,opacity",
          }
        );
      }, element);

      return () => ctx.revert();
    }, [opacity, x, y, duration, delay, ease, ref]);

    // 👇 só aplica width se ele foi passado
    const style = width ? { width } : undefined;

    return (
      <div ref={ref} style={style}>
        {children}
      </div>
    );
  }
);
