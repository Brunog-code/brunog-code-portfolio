// Importa hooks e componentes essenciais do React e Three.js
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, useTexture } from "@react-three/drei";

// RUNTIME: para Raycaster, Vector3, MathUtils
import * as THREE from "three";

import {
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiPrisma,
  SiHtml5,
  SiPostgresql,
} from "react-icons/si";

// =====================
// COMPONENTE PRINCIPAL
// =====================
export const TechOrbit = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <ambientLight intensity={1.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-5, -3, -5]} intensity={0.8} />
        <pointLight position={[0, 0, 5]} intensity={1} />
        <pointLight position={[0, 0, -5]} intensity={0.5} />

        <Scene />

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

// =====================
// CENA 3D COM PLANETA E ÍCONES
// =====================
function Scene() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const groupRef = useRef<any>(null!);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const centralRef = useRef<any>(null!);

  const earthTexture = useTexture("/textures/earth.jpg");

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={centralRef}>
        <sphereGeometry args={[1.2, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      <OrbitingIcon
        angle={0}
        radius={2.8}
        icon={<SiHtml5 color="#E34F26" size={36} />}
        occluderRef={centralRef}
      />
      <OrbitingIcon
        angle={Math.PI / 3}
        radius={2.8}
        icon={<SiTypescript color="#3178C6" size={36} />}
        occluderRef={centralRef}
      />
      <OrbitingIcon
        angle={(2 * Math.PI) / 3}
        radius={2.8}
        icon={<SiNodedotjs color="#5FA04E" size={36} />}
        occluderRef={centralRef}
      />
      <OrbitingIcon
        angle={Math.PI}
        radius={2.8}
        icon={<SiReact color="#61DAFB" size={36} />}
        occluderRef={centralRef}
      />
      <OrbitingIcon
        angle={(4 * Math.PI) / 3}
        radius={2.8}
        icon={<SiPostgresql color="#336791" size={36} />}
        occluderRef={centralRef}
      />
      <OrbitingIcon
        angle={(5 * Math.PI) / 3}
        radius={2.8}
        icon={<SiPrisma color="#2D3748" size={36} />}
        occluderRef={centralRef}
      />
    </group>
  );
}

// =====================
// PROPRIEDADES DO ÍCONE ORBITANTE
// =====================
interface IOrbitingIconProps {
  angle: number;
  radius: number;
  icon: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  occluderRef?: React.RefObject<any>;
}

// =====================
// COMPONENTE DO ÍCONE ORBITANTE
// =====================

function OrbitingIcon({
  angle,
  radius,
  icon,
  occluderRef,
}: IOrbitingIconProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null!);
  const { camera } = useThree();
  const raycaster = useRef(new THREE.Raycaster()).current;
  const divRef = useRef<HTMLDivElement>(null);
  const opacity = useRef(1);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.getElapsedTime();
    ref.current.position.x = Math.cos(t + angle) * radius;
    ref.current.position.z = Math.sin(t + angle) * radius;

    // === OCLUSÃO ===
    let occluded = false;
    if (occluderRef?.current) {
      const worldPos = new THREE.Vector3();
      ref.current.getWorldPosition(worldPos);
      const dir = worldPos.clone().sub(camera.position).normalize();

      raycaster.set(camera.position, dir);
      const hits = raycaster.intersectObject(occluderRef.current, true);

      if (
        hits.length > 0 &&
        hits[0].distance < camera.position.distanceTo(worldPos) - 0.01
      ) {
        occluded = true;
      }
    }

    // === FADE ===
    opacity.current = THREE.MathUtils.lerp(
      opacity.current,
      occluded ? 0 : 1,
      0.12
    );

    if (divRef.current) {
      divRef.current.style.opacity = opacity.current.toString();
      divRef.current.style.pointerEvents =
        opacity.current < 0.02 ? "none" : "auto";
    }
  });

  return (
    <group ref={ref}>
      <Html center distanceFactor={8}>
        <div
          ref={divRef}
          style={{
            fontSize: "28px",
            transform: "translate(-50%, -50%)",
            opacity: 1,
            pointerEvents: "none",
          }}
        >
          {icon}
        </div>
      </Html>
    </group>
  );
}
