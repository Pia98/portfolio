import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";

const TechIcon = ({ model }) => {
    const scene = useGLTF(model.modelPath);

    useEffect(() => {
        if(model.name === "Interactive Developer") {
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

            <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
                <group scale={model.scale} position={[0, 0, 0]} rotation={model.rotation}>
                    <primitive object={scene.scene}/>
                </group>
            </Float>
        </Canvas>
    );
}

export default TechIcon;