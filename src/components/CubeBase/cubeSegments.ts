import { COLOR_SIDE } from './CubeSegment/types'

const cubeSegments = [
  // Top middle
  {
    id: 1,
    position: [0, 1, 0],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
  },
  {
    id: 2,
    position: [0, 1, 1],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
  },
  {
    id: 3,
    position: [0, 1, -1],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.BACK,
    side2Color: 'white',
  },
  // Top right
  {
    id: 4,
    position: [1, 1, 0],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.RIGHT,
    side2Color: 'blue',
  },
  {
    id: 5,
    position: [1, 1, 1],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
    side3: COLOR_SIDE.RIGHT,
    side3Color: 'blue',
  },
  {
    id: 6,
    position: [1, 1, -1],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.RIGHT,
    side2Color: 'blue',
    side3: COLOR_SIDE.BACK,
    side3Color: 'white',
  },
  // Top left
  {
    id: 7,
    position: [-1, 1, 0],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.LEFT,
    side2Color: 'green',
  },
  {
    id: 8,
    position: [-1, 1, 1],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
    side3: COLOR_SIDE.LEFT,
    side3Color: 'green',
  },
  {
    id: 9,
    position: [-1, 1, -1],
    side1: COLOR_SIDE.TOP,
    side1Color: 'red',
    side2: COLOR_SIDE.BACK,
    side2Color: 'white',
    side3: COLOR_SIDE.LEFT,
    side3Color: 'green',
  },
  // Middle left
  { id: 10, position: [-1, 0, 0], side1: COLOR_SIDE.LEFT, side1Color: 'green' },
  {
    id: 11,
    position: [-1, 0, -1],
    side1: COLOR_SIDE.LEFT,
    side1Color: 'green',
    side2: COLOR_SIDE.BACK,
    side2Color: 'white',
  },
  {
    id: 12,
    position: [-1, 0, 1],
    side1: COLOR_SIDE.LEFT,
    side1Color: 'green',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
  },
  // Middle middle
  {
    id: 13,
    position: [0, 0, -1],
    side1: COLOR_SIDE.BACK,
    side1Color: 'white',
  },
  {
    id: 14,
    position: [0, 0, 1],
    side1: COLOR_SIDE.FRONT,
    side1Color: 'yellow',
  },
  // Middle right
  {
    id: 15,
    position: [1, 0, 0],
    side1: COLOR_SIDE.RIGHT,
    side1Color: 'blue',
  },
  {
    id: 16,
    position: [1, 0, -1],
    side1: COLOR_SIDE.RIGHT,
    side1Color: 'blue',
    side2: COLOR_SIDE.BACK,
    side2Color: 'white',
  },
  {
    id: 17,
    position: [1, 0, 1],
    side1: COLOR_SIDE.RIGHT,
    side1Color: 'blue',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
  },
  // Bottom right
  {
    id: 18,
    position: [1, -1, 0],
    side1: COLOR_SIDE.RIGHT,
    side1Color: 'blue',
    side2: COLOR_SIDE.BOTTOM,
    side2Color: 'orange',
  },
  {
    id: 19,
    position: [1, -1, -1],
    side1: COLOR_SIDE.RIGHT,
    side1Color: 'blue',
    side2: COLOR_SIDE.BOTTOM,
    side2Color: 'orange',
    side3: COLOR_SIDE.BACK,
    side3Color: 'white',
  },
  {
    id: 20,
    position: [1, -1, 1],
    side1: COLOR_SIDE.RIGHT,
    side1Color: 'blue',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
    side3: COLOR_SIDE.BOTTOM,
    side3Color: 'orange',
  },
  // Bottom middle
  {
    id: 21,
    position: [0, -1, 0],
    side1: COLOR_SIDE.BOTTOM,
    side1Color: 'orange',
  },
  {
    id: 22,
    position: [0, -1, -1],
    side1: COLOR_SIDE.BOTTOM,
    side1Color: 'orange',
    side2: COLOR_SIDE.BACK,
    side2Color: 'white',
  },
  {
    id: 23,
    position: [0, -1, 1],
    side1: COLOR_SIDE.BOTTOM,
    side1Color: 'orange',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
  },
  // Bottom left
  {
    id: 24,
    position: [-1, -1, 0],
    side1: COLOR_SIDE.BOTTOM,
    side1Color: 'orange',
    side3: COLOR_SIDE.LEFT,
    side3Color: 'green',
  },
  {
    id: 25,
    position: [-1, -1, -1],
    side1: COLOR_SIDE.BOTTOM,
    side1Color: 'orange',
    side2: COLOR_SIDE.BACK,
    side2Color: 'white',
    side3: COLOR_SIDE.LEFT,
    side3Color: 'green',
  },
  {
    id: 26,
    position: [-1, -1, 1],
    side1: COLOR_SIDE.BOTTOM,
    side1Color: 'orange',
    side2: COLOR_SIDE.FRONT,
    side2Color: 'yellow',
    side3: COLOR_SIDE.LEFT,
    side3Color: 'green',
  },
]

export default cubeSegments
