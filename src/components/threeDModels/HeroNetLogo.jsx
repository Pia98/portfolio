/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 HeroNetLogo.glb 
*/

import { useGLTF } from '@react-three/drei'

export function HeroNetLogo(props) {
  const { nodes, materials } = useGLTF('/projects/heroNet/HeroNetLogo.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.5,0,0]} scale={0.05}>
        <mesh geometry={nodes.FlusspCube8_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[-1.312, -1.271, -8.237]} scale={1.891} />
        <mesh geometry={nodes.FlusspCube7_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[-1.312, -1.271, -3.676]} scale={1.891} />
        <mesh geometry={nodes.FlusspCube4_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[-12.207, 2.299, 3.022]} scale={[2.234, 0.923, 0.736]} />
        <mesh geometry={nodes.FlusspCube3_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[12.226, 2.255, 2.617]} scale={[2.209, 0.923, 0.736]} />
        <mesh geometry={nodes.FlussbevelPolygon3_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[-1.183, 0.332, 4.308]} scale={1.916} />
        <mesh geometry={nodes.FlusspCube2_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[10.59, 3.377, 0.374]} scale={[3.577, 0.923, 0.736]} />
        <mesh geometry={nodes.FlusspCube1_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[-12.924, 4.398, 1.322]} scale={[3.152, 0.923, 0.736]} />
        <mesh geometry={nodes.FlussbevelPolygon2_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[-1.183, 0.332, 0.206]} scale={1.916} />
        <mesh geometry={nodes.FlussbevelPolygon1_1.geometry} material={materials.Fluss_aiStandardSurface1} position={[-1.325, -0.607, 2.141]} scale={[2.352, 2.352, 1.516]} />
      </group>
    </group>
  )
}

useGLTF.preload('/projects/heroNet/HeroNetLogo.glb')
