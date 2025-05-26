import React from 'react'
import * as THREE from 'three';
import { useFrame, useThree  } from "@react-three/fiber";
import fragmentShader from './shaders/fragment.glsl.js';
import vertexShader from './shaders/vertex.glsl.js';
import circleShader from './shaders/circleFragments.glsl.js';
import { useRef, useEffect } from 'react';

const BgPlane = () => {

    const meshRef = useRef();
    const { camera, size } = useThree();
  
    useEffect(() => {
      // Setze das Objekt auf Layer 1 (statt Standard-Layer 0)
      meshRef.current.layers.set(1);
    }, []);

  const uniforms = {
    iTime: { value: 0 },
    iResolution:  { value: new THREE.Vector3() },
  };

  // const shaderMaterial = new THREE.ShaderMaterial({
  //   fragmentShader: fragmentShader,
  //   uniforms: uniforms,
  // });

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: circleShader,
    uniforms: uniforms,
    transparent: false,
    depthWrite: false,
    depthTest: false,
  });
  // materials['SVGMat.002']

  useFrame(() => {
    uniforms.iTime.value += 0.01;

    const canvas = document.getElementById('LogoCanvas');
    uniforms.iResolution.value.set(canvas.clientWidth, canvas.clientHeight, 1);


    if (meshRef.current) {
        // An Kamera kleben
        meshRef.current.position.copy(camera.position);
        meshRef.current.quaternion.copy(camera.quaternion);
  
        // Dynamisch skalieren, damit Plane immer Sichtfeld füllt
        const distance = 1; // Abstand von Kamera
        const height = 2 * Math.tan((camera.fov * Math.PI) / 360) * distance;
        const width = height * (size.width / size.height);
        meshRef.current.scale.set(width, height, 1);
        meshRef.current.position.z -= distance; // vor Kamera
      }
  });

  return (
    <mesh position={[0, 0, -1]} rotation={[0, 0, 0]} material={shaderMaterial} ref={meshRef}>
        <planeGeometry args={[20, 25]} />
    </mesh>
  )
}

export default BgPlane;