import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

import vertexShader from "../../../shaders/vertex.glsl?raw";
import fragmentShader from "../../../shaders/fragment.glsl?raw";

interface ImageRevealProps {
  image?: string; 
  video?: string;
}

export const ImageReveal = ({ image, video }: ImageRevealProps) => {
  const { gl } = useThree();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshRef = useRef<any>(null!);
  const mouse = useRef(new THREE.Vector2(-10, -10));
  const strength = useRef({ value: 0 });

  //Cria textura — vídeo OU imagem
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const texture = useRef<any>(null);

  useEffect(() => {
    if (video) {
      const vid = document.createElement("video");
      vid.src = video;
      vid.loop = true;
      vid.muted = true;
      vid.crossOrigin = "anonymous";
      vid.play();

      const videoTexture = new THREE.VideoTexture(vid);
      videoTexture.colorSpace = THREE.SRGBColorSpace;
      videoTexture.minFilter = THREE.LinearFilter;
      videoTexture.magFilter = THREE.LinearFilter;
      videoTexture.generateMipmaps = false;

      texture.current = videoTexture;
    } else if (image) {
      const loader = new THREE.TextureLoader();
      texture.current = loader.load(image);
      texture.current.colorSpace = THREE.SRGBColorSpace;
    }
  }, [video, image]);

  // uniforms
  const uniforms = useRef({
    u_image: { value: texture.current },
    u_mouse: { value: new THREE.Vector2(-10, -10) },
    u_strength: { value: 0 },
    u_time: { value: 0 },
    u_bgColor: { value: new THREE.Color("#0a001a") },
  });

  //Atualiza textura no primeiro render após load
  useEffect(() => {
    uniforms.current.u_image.value = texture.current;
  });

  useEffect(() => {
    const canvas = gl.domElement;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.offsetX / canvas.clientWidth;
      const y = 1.0 - e.offsetY / canvas.clientHeight;

      mouse.current.set(x, y);
      gsap.to(strength.current, {
        value: 1.0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(strength.current, {
        value: 0.0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => {
          mouse.current.set(-10, -10);
        },
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [gl.domElement]);

  useFrame(({ clock }) => {
    uniforms.current.u_time.value = clock.getElapsedTime();
    uniforms.current.u_mouse.value.copy(mouse.current);
    uniforms.current.u_strength.value = strength.current.value;

    //Atualiza textura de vídeo a cada frame
    if (texture.current instanceof THREE.VideoTexture) {
      texture.current.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms.current}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        blending={THREE.NormalBlending}
      />
    </mesh>
  );
};
