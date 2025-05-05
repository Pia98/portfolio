import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import BgPlane from "./BgPlane.jsx";
import { Logo } from './Logo.jsx';
import ThreeDLights from "./ThreeDLights.jsx";

const ThreeDExperience = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'}); // Adjust the breakpoint as needed
    return (
     <Canvas camera={{ position: [0, 0, 2], fov: 45 }} id="LogoCanvas">
        <ThreeDLights />
        <directionalLight position={[-5,5,-2]} intensity={1} color="#97BCFF" />
        <OrbitControls
                    enablePan={false}
                    enableZoom={!isMobile}
                    maxDistance={3}
                    minDistance={1.5}
                    minPolarAngle={Math.PI / 5}
                    maxPolarAngle={Math.PI}/>
        <group>
            <BgPlane/>
        </group>
        <group
            scale={isMobile ? 0.7 : 1}
            position={ [-0.1, 0, 0] }>
                    <Logo />
        </group>
        
      </Canvas>
    );
}

export default ThreeDExperience;