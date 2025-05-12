import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
  Html,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (
      model.name === "ThreeJS" ||
      model.name === "GitHub" ||
      model.name === "Unreal Engine"
    ) {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          child.material.color.set("white");
        }
      });
    }
  }, [scene]);

  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5,5,5]} intensity={1} color="#97BCFF" />
        <Environment preset="city" />
        <OrbitControls
            enablePan={false}
            enableZoom={false}
        />
    {/* <group position={[index, 0, 0]} rotation={[0, 0, 0]}> */}
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
          scale={model.scale}
          position={[0, 0, 0]}
          rotation={model.rotation}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
      {/* put the name of the technology here and only show it on hover
                make just one scene which contains all the models for performance
            */}
      <Html
        center
        distanceFactor={10}
        position={[0, 0, 0]}
        className="tech-model-name"
      >
        <h1>{model.name}</h1>
      </Html>
    {/* </group> */}

     </Canvas>
  );
};

export default TechIcon;
