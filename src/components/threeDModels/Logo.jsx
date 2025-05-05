
import React from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';
import { useFrame  } from "@react-three/fiber";
import { useRef } from 'react';

export function Logo(props) {
  const meshRef = useRef();

    useFrame(() => {
    
      if (meshRef.current) {
          // An Kamera kleben
          meshRef.current.rotation.y += 0.01;
        }
    });

  const { nodes, materials } = useGLTF('/models/mine/Logo.glb')
  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.002']} position={[-0.6, -0.75, 0]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.003']} position={[-0.6, -0.75, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/models/mine/Logo.glb')
