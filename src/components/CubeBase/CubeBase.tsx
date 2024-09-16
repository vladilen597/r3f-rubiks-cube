import { Sphere } from '@react-three/drei'
import CubeSegment from './CubeSegment/CubeSegment'
import cubeSegments from './cubeSegments'

const CubeBase = () => {
  return (
    <group name='cube-base'>
      <Sphere args={[0.25, 16, 16]}>
        <meshStandardMaterial color={'red'} />
      </Sphere>
      {cubeSegments.map((segment) => {
        return (
          <CubeSegment
            key={segment.id}
            position={segment.position as [number, number, number]}
            side1={segment.side1}
            side1Color={segment.side1Color}
            side2={segment.side2}
            side2Color={segment.side2Color}
            side3={segment.side3}
            side3Color={segment.side3Color}
          />
        )
      })}
    </group>
  )
}

export default CubeBase
