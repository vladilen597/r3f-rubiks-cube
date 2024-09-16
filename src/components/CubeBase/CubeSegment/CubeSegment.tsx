import { RoundedBox } from '@react-three/drei'
import { ICubeSegmentProps, SIDE_POSITIONS } from './types'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { useDrag } from '@use-gesture/react'

const CubeSegment = ({
  position,
  side1,
  side1Color,
  side2,
  side2Color,
  side3,
  side3Color,
}: ICubeSegmentProps) => {
  const segmentRef = useRef<THREE.Group>(null)
  const [x, setX] = useState(position[0])

  const bind = useDrag((args) => {
    setX((args.movement[0] / window.innerWidth) * 2 - 1)
    console.log(args)
  })

  return (
    <group
      {...bind()}
      ref={segmentRef}
      name='cube-segment'
      position={[x, position[1], position[2]]}
    >
      <RoundedBox args={[1, 1, 1]}>
        <meshStandardMaterial color='#fff' />
      </RoundedBox>
      {side1 && (
        <RoundedBox
          args={SIDE_POSITIONS[side1].args as [number, number, number]}
          position={SIDE_POSITIONS[side1].position as [number, number, number]}
        >
          <meshStandardMaterial color={side1Color} />
        </RoundedBox>
      )}
      {side2 && (
        <RoundedBox
          args={SIDE_POSITIONS[side2].args as [number, number, number]}
          position={SIDE_POSITIONS[side2].position as [number, number, number]}
        >
          <meshStandardMaterial color={side2Color} />
        </RoundedBox>
      )}
      {side3 && (
        <RoundedBox
          args={SIDE_POSITIONS[side3].args as [number, number, number]}
          position={SIDE_POSITIONS[side3].position as [number, number, number]}
        >
          <meshStandardMaterial color={side3Color} />
        </RoundedBox>
      )}
    </group>
  )
}

export default CubeSegment
