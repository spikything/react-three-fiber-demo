import { Canvas, Euler, MeshProps, useFrame } from '@react-three/fiber';
import { ReactElement, useRef } from 'react';
import { OrbitControls } from '@react-three/drei'

function Box ({rotation} : {rotation:Euler}):ReactElement {

  const box:MeshProps = useRef();

  useFrame((state, delta) => (
    box.current.rotation.x += delta * 0.2,
    box.current.rotation.y += delta * 0.1
  ));

  return (
    <mesh ref={box} position={[Math.random()*4-2, Math.random()*4-2, Math.random()*4-2]} rotation={rotation} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="red" transparent roughness={0.1} metalness={0.05} />
    </mesh>
  )
}

function App() {

  return <Canvas shadows>

    <OrbitControls />

    <ambientLight intensity={0.25} castShadow />
    <spotLight position={[20, 20, 20]} color='yellow' castShadow />
    <spotLight position={[-20, -20, 20]} color='white' castShadow />

    <Box rotation={[9,9,9] as Euler}  />
    <Box rotation={[6,6,6] as Euler}  />
    <Box rotation={[30,0,0] as Euler}  />
    <Box rotation={[1,2,3] as Euler}  />
    <Box rotation={[0,90,0] as Euler}  />
    <Box rotation={[0,0,0] as Euler}  />
    <Box rotation={[0,0,0] as Euler}  />
    <Box rotation={[0,0,0] as Euler}  />
    <Box rotation={[-45,0,0] as Euler}  />
    <Box rotation={[15,0,0] as Euler}  />
    <Box rotation={[0,15,0] as Euler}  />
    <Box rotation={[0,0,0] as Euler}  />
    <Box rotation={[0,0,35] as Euler}  />
    <Box rotation={[0,0,0] as Euler}  />
    
  </Canvas>
}

export default App;