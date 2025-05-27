import { Float, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import BgPlane from "./BgPlane.jsx";
import ThreeDLights from "./ThreeDLights.jsx";
import MultiLayerRenderer from "./MultiLayerRenderer.jsx";

const ThreeDLogoExperience = ({children}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" }); // Adjust the breakpoint as needed
  return (
    <Canvas
      camera={{ position: [0, 0, 2], fov: 45, near: 0.1, far: 100 }}
      id="LogoCanvas"
    >
      <MultiLayerRenderer />
      <ThreeDLights />
      <directionalLight position={[-5, 5, -2]} intensity={1} color="#97BCFF" />
      {!isMobile && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxDistance={3}
          minDistance={1.5}
          minPolarAngle={Math.PI / 5}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 2.5}
        />
      )}
      <group>
        <BgPlane />
      </group>
      <Float speed={4.5} rotationIntensity={0.3} floatIntensity={0.75}>
        <group
          scale={isMobile ? 0.7 : 1}
          position={isMobile ? [0, 0, 0] : [0.75, 0, 0]}
        >
          {children}
        </group>
      </Float>
    </Canvas>
  );
};

export default ThreeDLogoExperience;
