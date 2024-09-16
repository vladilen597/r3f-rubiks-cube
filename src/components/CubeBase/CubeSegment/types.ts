export type ColorSide = keyof typeof COLOR_SIDE

export interface ICubeSegmentProps {
  position: [number, number, number]
  side1?: ColorSide
  side1Color?: string
  side2?: ColorSide
  side2Color?: string
  side3?: ColorSide
  side3Color?: string
}

export const COLOR_SIDE = {
  TOP: 'TOP',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  BOTTOM: 'BOTTOM',
  FRONT: 'FRONT',
  BACK: 'BACK',
} as const

export const SIDE_POSITIONS = {
  TOP: {
    args: [0.9, 0.1, 0.9],
    position: [0, 0.5, 0],
  },
  BOTTOM: {
    args: [0.9, 0.1, 0.9],
    position: [0, -0.5, 0],
  },
  LEFT: {
    args: [0.1, 0.9, 0.9],
    position: [-0.5, 0, 0],
  },
  RIGHT: {
    args: [0.1, 0.9, 0.9],
    position: [0.5, 0, 0],
  },
  FRONT: {
    args: [0.9, 0.9, 0.1],
    position: [0, 0, 0.5],
  },
  BACK: {
    args: [0.9, 0.9, 0.1],
    position: [0, 0, -0.5],
  },
}
