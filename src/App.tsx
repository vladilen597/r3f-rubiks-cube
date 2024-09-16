import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import R3FSky from './components/R3FSky/R3FSky'
import { OrbitControls, Plane } from '@react-three/drei'
import CubeBase from './components/CubeBase/CubeBase'
import './App.css'
import { Physics, RigidBody } from '@react-three/rapier'

function App() {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <R3FSky />
        <Physics>
          <CubeBase />
          <RigidBody>
            <Plane
              args={[100, 100]}
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -5, 0]}
            />
          </RigidBody>
        </Physics>
        {/* <OrbitControls /> */}
        <directionalLight position={[5, 5, 5]} color={'#fdfbd3'} />
        <ambientLight intensity={0.5} color='#fdfbd3' />
        <axesHelper scale={3} />
      </Canvas>
    </Suspense>
  )
}

export default App
