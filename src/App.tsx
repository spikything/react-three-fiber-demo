import { Canvas, Euler, MeshProps, useFrame } from '@react-three/fiber';
import { ReactElement, useRef } from 'react';

function Box (rotation?:Euler):ReactElement {

  const box:MeshProps = useRef();

  useFrame((state, delta) => (
    box.current.rotation.x += delta
  ))

  return (
    <mesh ref={box} rotation={rotation?.rotation}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}

function App() {

  return <Canvas>
    <ambientLight intensity={0.5} />
    <spotLight position={[10,10,10]} />
    <Box rotation={[9,9,9] as Euler} />
  </Canvas>
}

export default App;