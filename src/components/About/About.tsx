import "./about.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { InteractiveCube } from "../lib/three/InteractiveCube";

export const About = () => {
  const refPipe = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: refPipe,
    offset: ["start end", "end 70%"],
  });

  //cor do início (roxo) para o final (rosa)
  const lineColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#6a11cb", "#ff007f"]
  );

  //cubo three
  // useEffect(() => {
  //   if (!mountRef.current) return;

  //   // --- LIMPA o container antes de recriar o cubo ---
  //   while (mountRef.current.firstChild) {
  //     mountRef.current.removeChild(mountRef.current.firstChild);
  //   }

  //   // --- CENA, CÂMERA e RENDERER ---
  //   const scene = new Scene();
  //   const camera = new PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   camera.position.z = 6;

  //   const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   mountRef.current.appendChild(renderer.domElement);

  //   // --- CONTROLES DE CÂMERA (orbit) ---
  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enableDamping = true;
  //   controls.dampingFactor = 0.05;
  //   controls.enablePan = false;
  //   controls.enableZoom = false;

  //   // --- FUNÇÃO PARA CRIAR UMA FACE COM TEXTO ---
  //   function criarFaceComTexto(
  //     texto: string,
  //     corFundo: string = "#7f00ff",
  //     largura = 256,
  //     altura = 256
  //   ): InstanceType<typeof CanvasTexture> {
  //     const canvas = document.createElement("canvas");
  //     canvas.width = largura;
  //     canvas.height = altura;
  //     const ctx = canvas.getContext("2d")!;
  //     // Fundo
  //     ctx.fillStyle = corFundo;
  //     ctx.fillRect(0, 0, largura, altura);
  //     // Texto
  //     ctx.fillStyle = "white";
  //     ctx.font = "45px Arial";
  //     ctx.textAlign = "center";
  //     ctx.textBaseline = "middle";
  //     ctx.fillText(texto, largura / 2, altura / 2);
  //     return new CanvasTexture(canvas);
  //   }

  //   // --- CRIA OS MATERIAIS DAS FACES ---
  //   const facesTextos = [
  //     "Front-end",
  //     "Back-end",
  //     "Fullstack",
  //     "API",
  //     "Webhook",
  //     "UX/UI",
  //   ];

  //   const materials: InstanceType<typeof MeshBasicMaterial>[] = facesTextos.map(
  //     (texto) => new MeshBasicMaterial({ map: criarFaceComTexto(texto) })
  //   );

  //   // --- FUNÇÃO PARA CRIAR CUBO RESPONSIVO ---
  //   const criarCubo = (larguraTela: number) => {
  //     const tamanho = larguraTela < 768 ? 1.8 : 3;
  //     return new BoxGeometry(tamanho, tamanho, tamanho);
  //   };

  //   // --- CRIA O CUBO ---
  //   const cube: InstanceType<typeof Mesh> = new Mesh(
  //     criarCubo(window.innerWidth),
  //     materials
  //   );
  //   scene.add(cube);

  //   // --- ADICIONA BORDA AO CUBO ---
  //   const edges = new EdgesGeometry(cube.geometry); // gera as arestas
  //   const lineMaterial = new LineBasicMaterial({
  //     color: 0x000000,
  //     linewidth: 2,
  //   });
  //   const line = new LineSegments(edges, lineMaterial);
  //   cube.add(line); //borda "presa" ao cubo

  //   // --- PARTÍCULAS EM TORNO DO CUBO ---
  //   const particleCount = 300;
  //   const particlesGeo = new BufferGeometry();
  //   const positions: number[] = [];

  //   for (let i = 0; i < particleCount; i++) {
  //     const radius = 4 + Math.random() * 1;
  //     const angle = Math.random() * Math.PI * 3;
  //     const y = (Math.random() - 0.5) * 4;
  //     positions.push(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
  //   }

  //   particlesGeo.setAttribute(
  //     "position",
  //     new Float32BufferAttribute(positions, 3)
  //   );

  //   const particlesMat = new PointsMaterial({ color: 0xffffff, size: 0.05 });
  //   const particles = new Points(particlesGeo, particlesMat);
  //   scene.add(particles);

  //   // --- AJUSTE AUTOMÁTICO AO REDIMENSIONAR ---
  //   const onWindowResize = () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);

  //     //recria o cubo com tamanho proporcional
  //     cube.geometry.dispose();
  //     cube.geometry = criarCubo(window.innerWidth);

  //     //atualiza a borda também
  //     const newEdges = new EdgesGeometry(cube.geometry);
  //     line.geometry.dispose();
  //     line.geometry = newEdges;
  //   };

  //   window.addEventListener("resize", onWindowResize);

  //   // --- ANIMAÇÃO ---
  //   let animationId: number;
  //   let rotX = 0,
  //     rotY = 0,
  //     rotZ = 0;

  //   const animate = () => {
  //     animationId = requestAnimationFrame(animate);

  //     // Rotação contínua do cubo
  //     rotX += 0.01;
  //     rotY += 0.015;
  //     rotZ += 0.008;
  //     cube.rotation.set(rotX, rotY, rotZ);

  //     // Partículas girando
  //     const pos = particlesGeo.getAttribute("position");
  //     for (let i = 0; i < pos.count; i++) {
  //       const x = pos.getX(i);
  //       const z = pos.getZ(i);
  //       const angle = 0.01;
  //       const newX = x * Math.cos(angle) - z * Math.sin(angle);
  //       const newZ = x * Math.sin(angle) + z * Math.cos(angle);
  //       pos.setX(i, newX);
  //       pos.setZ(i, newZ);
  //     }
  //     pos.needsUpdate = true;

  //     controls.update();
  //     renderer.render(scene, camera);
  //   };
  //   animate();

  //   // --- LIMPEZA ---
  //   return () => {
  //     cancelAnimationFrame(animationId);
  //     window.removeEventListener("resize", onWindowResize);

  //     controls.dispose();
  //     cube.geometry.dispose();
  //     materials.forEach((m) => {
  //       if (m.map) m.map.dispose();
  //       m.dispose();
  //     });
  //     particlesGeo.dispose();
  //     particlesMat.dispose();
  //     renderer.dispose();
  //     scene.clear();
  //   };
  // }, []);

  return (
    <section className="container-about">
      <div className="title">
        <h1>
          <span className="key-title">&#123; </span>Sobre
          <span className="key-title"> &#125;</span>
        </h1>
      </div>

      <div className="content">
        <div className="about-text">
          <motion.div
            ref={refPipe}
            className="pipe"
            style={{
              scaleY: scrollYProgress,
              width: "40px",
              borderRadius: "4px",
              backgroundColor: lineColor,
              transformOrigin: "0%",
            }}
          ></motion.div>
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
          <div className="wrap-cube-about">
            <InteractiveCube />
          </div>
        </div>
      </div>
    </section>
  );
};
