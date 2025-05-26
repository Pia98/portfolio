import { Canvas } from "@react-three/fiber";
import BgPlane from "./BgPlane.jsx";
import MultiLayerRenderer from "./MultiLayerRenderer.jsx";

const ThreeDSimpleExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 45, near: 0.1, far: 100 }}
      id="LogoCanvas"
    >
      <MultiLayerRenderer />
      <group>
        <BgPlane />
      </group>
    </Canvas>
  );
};

export default ThreeDSimpleExperience;
