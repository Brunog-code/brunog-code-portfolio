import "./about.css";
import { useRef, useEffect } from "react";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Mesh,
  BoxGeometry,
  MeshBasicMaterial,
  CanvasTexture,
  Points,
  PointsMaterial,
  BufferGeometry,
  Float32BufferAttribute,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const About = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  //cubo3d
  useEffect(() => {
    if (!mountRef.current) return;

    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }

    const scene = new Scene();
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = false;

    // --- Função de textura ---
    function criarFaceComTexto(
      texto: string,
      corFundo: string = "#7f00ff",
      largura = 256,
      altura = 256
    ): InstanceType<typeof CanvasTexture> {
      const canvas = document.createElement("canvas");
      canvas.width = largura;
      canvas.height = altura;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = corFundo;
      ctx.fillRect(0, 0, largura, altura);
      ctx.fillStyle = "white";
      ctx.font = "48px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(texto, largura / 2, altura / 2);
      return new CanvasTexture(canvas);
    }

    // --- Materiais ---
    const facesTextos = [
      "Front-end",
      "Back-end",
      "Fullstack",
      "API",
      "Webhook",
      "UX/UI",
    ];
    const materials: InstanceType<typeof MeshBasicMaterial>[] = facesTextos.map(
      (t) => new MeshBasicMaterial({ map: criarFaceComTexto(t) })
    );

    // --- CUBO ---
    const criarCubo = (larguraTela: number) => {
      const tamanho = larguraTela < 768 ? 1.8 : 3;
      return new BoxGeometry(tamanho, tamanho, tamanho);
    };
    const cube: InstanceType<typeof Mesh> = new Mesh(
      criarCubo(window.innerWidth),
      materials
    );
    scene.add(cube);

    // --- Partículas ---
    const particleCount = 200;
    const particlesGeo = new BufferGeometry();
    const positions: number[] = [];
    for (let i = 0; i < particleCount; i++) {
      const radius = 4 + Math.random() * 1;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4;
      positions.push(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    }
    particlesGeo.setAttribute(
      "position",
      new Float32BufferAttribute(positions, 3)
    );
    const particlesMat = new PointsMaterial({ color: 0xffffff, size: 0.05 });
    const particles = new Points(particlesGeo, particlesMat);
    scene.add(particles);

    // --- Responsividade ---
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      cube.geometry.dispose();
      cube.geometry = criarCubo(window.innerWidth);
    };
    window.addEventListener("resize", onWindowResize);

    // --- Animação ---
    let animationId: number;
    let rotX = 0,
      rotY = 0,
      rotZ = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Rotação contínua
      rotX += 0.01;
      rotY += 0.015;
      rotZ += 0.008;
      cube.rotation.set(rotX, rotY, rotZ);

      // --- Partículas girando ---
      const positions = particlesGeo.getAttribute("position");
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const angle = 0.01;
        const newX = x * Math.cos(angle) - z * Math.sin(angle);
        const newZ = x * Math.sin(angle) + z * Math.cos(angle);
        positions.setX(i, newX);
        positions.setZ(i, newZ);
      }
      positions.needsUpdate = true;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onWindowResize);

      controls.dispose();
      cube.geometry.dispose();
      materials.forEach((m) => {
        if (m.map) m.map.dispose();
        m.dispose();
      });
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();

      while (scene.children.length > 0) scene.remove(scene.children[0]);
    };
  }, []);

  return (
    <section className="container-about" data-scroll-section>
      <div className="title">
        <h1>
          <span className="key-title">&#123; </span>Sobre
          <span className="key-title"> &#125;</span>
        </h1>
      </div>

      <div className="content">
        <div className="about-text">
          <div className="pipe"></div>
          <p>
            Apaixonado por tecnologia e pela criação de soluções que realmente
            fazem a diferença, venho me dedicando ao desenvolvimento web há mais
            de um ano, com foco em React, Node.js, TypeScript e Next.js.
            Atualmente, curso Análise e Desenvolvimento de Sistemas, e meu
            objetivo é continuar evoluindo como desenvolvedor fullstack, unindo
            boas práticas, performance e design funcional. No futuro, pretendo
            expandir minha atuação também para o desenvolvimento mobile,
            buscando criar experiências completas e conectadas entre web e
            mobile<span className="about-dot">.</span>
          </p>
        </div>

        <div className="about-img">
          <div className="wrap-cube-about" ref={mountRef}></div>
        </div>
      </div>

      {/* <div className="imgs-float">
        <img
          src="html.png"
          className="html"
          alt="html"
          data-scroll
          data-scroll-speed="5"
        />
        <img
          src="css.png"
          className="css"
          alt="css"
          data-scroll
          data-scroll-speed="3"
        />
        <img
          src="js.webp"
          className="js"
          alt="js"
          data-scroll
          data-scroll-speed="6"
        />
      </div> */}
    </section>
  );
};
