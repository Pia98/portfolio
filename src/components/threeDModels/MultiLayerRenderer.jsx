import { useThree, useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

// Custom component for managing multi-layer rendering
const MultiLayerRenderer = () => {
  const { camera, gl, scene } = useThree();
  
//   const originalClearColor = useRef(new THREE.Color());

  useEffect(() => {
    gl.autoClear = false;
  }, [gl]);

  useFrame(() => {
    // background
    camera.layers.set(1);
    gl.clear(true, true, true);
    gl.render(scene, camera);

    // scene
    camera.layers.set(0);
    gl.clearDepth();
    gl.render(scene, camera);
  }, 1);

  return null;
};

export default MultiLayerRenderer;