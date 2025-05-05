import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Logo } from './Logo.jsx';

const ThreeDExperience = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)'}); // Adjust the breakpoint as needed
    return (
     <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} color="#1a1a40"/>
        <directionalLight position={[5,5,5]} intensity={1} color="#fff" />
        <OrbitControls
            enablePan={false}
            enableZoom={!isMobile}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}/>
        <Logo />
      </Canvas>
    );
}

export default ThreeDExperience;