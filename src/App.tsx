import { Canvas, Euler, MeshProps, useFrame } from '@react-three/fiber';
import { ReactElement, useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei'

function Box (rotation?:Euler):ReactElement {

  const box:MeshProps = useRef();

  useFrame((state, delta) => (
    box.current.rotation.x += delta * 0.1,
    box.current.rotation.y += delta * 0.05
  ));

  return (
    <mesh ref={box} rotation={rotation?.rotation}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}

function App() {

  return <Canvas>
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <spotLight position={[10,10,10]} />
    <Box rotation={[9,9,9] as Euler}  />
  </Canvas>
}

export default App;