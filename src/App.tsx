import { Canvas } from '@react-three/fiber';

function Box () {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function App() {

  return <Canvas>
    <ambientLight intensity='0.5' />
    <Box />
  </Canvas>
}

export default App