import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  Mesh, // Tipagem para o cubo
  Points, // Tipagem para partículas
  BufferAttribute, // Tipagem para geometria de partículas
  LineSegments, // Para criar linhas (bordas)
  LineBasicMaterial, // Material para as linhas
  EdgesGeometry, // Geometria das bordas do cubo
  CanvasTexture, // Textura gerada a partir de um canvas HTML
  Float32BufferAttribute, // Atributo de geometria em Float32
  BoxGeometry, // Geometria do cubo
  MeshBasicMaterial, // Material simples para o cubo
} from "three";

// Registrando no R3F para usar no JSX
extend({
  EdgesGeometry: EdgesGeometry,
  LineSegments: LineSegments,
  LineBasicMaterial: LineBasicMaterial,
});

// --- Constantes do cubo e partículas ---
const faceTexts = [
  "Front-end",
  "Back-end",
  "Fullstack",
  "API",
  "Webhook",
  "UX/UI",
];
const cubeBackgroundColor = "#7f00ff"; // Cor de fundo do cubo
const cubeEdgeColor = 0x111; // Cor da borda (preto)
const particleColorValue = 0xffffff; // Cor das partículas (branco)
const particleTotal = 300; // Número de partículas

// Função para criar uma textura de canvas com texto
function createCanvasWithText(
  text: string,
  backgroundColor: string = cubeBackgroundColor,
  width = 256,
  height = 256
) {
  const canvas = document.createElement("canvas"); // Cria canvas HTML
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!; // Contexto 2D do canvas
  // Preenche fundo
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  // Adiciona texto centralizado
  ctx.fillStyle = "white";
  ctx.font = "45px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, width / 2, height / 2);
  return canvas; // Retorna o canvas para gerar CanvasTexture
}

// Componente do cubo e partículas
function CubeAndParticles() {
  // Referência para o cubo (para manipular rotação)
  const cubeRef = useRef<InstanceType<typeof Mesh>>(null!);
  // Referência para partículas (para animar)
  const particlesRef = useRef<InstanceType<typeof Points>>(null!);

  // --- 1. Materiais do cubo ---
  const cubeMaterials = useMemo(() => {
    // Cria textura para cada face
    const textures = faceTexts.map(
      (text) => new CanvasTexture(createCanvasWithText(text))
    );
    // Cria material básico com textura para cada face
    return textures.map((map) => new MeshBasicMaterial({ map }));
  }, []); // useMemo garante que só é criado uma vez

  // --- 2. Geometria das partículas ---
  const particlePositions = useMemo(() => {
    const positions: number[] = [];
    for (let i = 0; i < particleTotal; i++) {
      const radius = 4 + Math.random() * 1; // Distância radial do centro
      const angle = Math.random() * Math.PI * 3; // Ângulo aleatório
      const y = (Math.random() - 0.5) * 4; // Altura aleatória
      // Calcula posição cartesiana (x, y, z)
      positions.push(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
    }
    return new Float32BufferAttribute(positions, 3); // Atributo de geometria
  }, []);

  // --- 3. Tamanho do cubo responsivo ---
  const cubeSize = window.innerWidth < 768 ? 1.8 : 3; // Cubo menor em mobile

  // --- 4. Animação ---
  useFrame(() => {
    // Rotação contínua do cubo
    cubeRef.current.rotation.x += 0.02; // Velocidade no eixo X
    cubeRef.current.rotation.y += 0.02; // Velocidade no eixo Y
    cubeRef.current.rotation.z += 0.01; // Velocidade no eixo Z

    // Rotação das partículas em torno do cubo
    if (particlesRef.current.geometry) {
      const positions = particlesRef.current.geometry.getAttribute(
        "position"
      ) as InstanceType<typeof BufferAttribute>;
      const angle = 0.005; // Velocidade de rotação das partículas
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        // Aplica rotação 2D no plano XZ
        const newX = x * Math.cos(angle) - z * Math.sin(angle);
        const newZ = x * Math.sin(angle) + z * Math.cos(angle);
        positions.setX(i, newX);
        positions.setZ(i, newZ);
      }
      positions.needsUpdate = true; // Atualiza GPU
    }
  });

  return (
    <>
      {/* Cubo principal */}
      <mesh ref={cubeRef} material={cubeMaterials}>
        {/* Geometria do cubo */}
        <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />

        {/* Borda do cubo */}
        <lineSegments>
          <edgesGeometry
            args={[new BoxGeometry(cubeSize, cubeSize, cubeSize)]}
          />
          <lineBasicMaterial
            attach="material"
            color={cubeEdgeColor}
            linewidth={2}
          />
        </lineSegments>
      </mesh>

      {/* Partículas */}
      <points ref={particlesRef}>
        <bufferGeometry attach="geometry">
          <bufferAttribute
            attach="attributes-position"
            {...particlePositions}
          />
        </bufferGeometry>
        <pointsMaterial color={particleColorValue} size={0.05} />
      </points>

      {/* Controles de câmera (OrbitControls) */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05} // Suaviza movimento
        enablePan={false} // Desativa pan
        enableZoom={false} // Desativa zoom
      />
    </>
  );
}

// Componente principal que renderiza a cena
export const InteractiveCube = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 75 }} // Posição e FOV da câmera
      style={{ width: "100%", height: "100%" }} // Canvas full-screen
      dpr={[1, 2]} // Qualidade de pixels (1x a 2x)
    >
      <ambientLight intensity={0.5} /> {/* Luz ambiente */}
      <pointLight position={[10, 10, 10]} intensity={1} /> {/* Luz pontual */}
      <CubeAndParticles /> {/* Componente com cubo + partículas */}
    </Canvas>
  );
};
