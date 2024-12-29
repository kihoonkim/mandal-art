import {COLORS} from "./canvas-helper.ts";

const CELL_WIDTH = 200
const CELL_HEIGHT = 150
const W_GAP = 70
const H_GAP = 50

function buildCell(x: number, y: number, globalCenter: boolean, blockCenter: boolean, globalIndex: number, blockIndex: number) {
  let color = 'black'
  if(globalCenter) {
    color= COLORS[blockIndex]
  }
  else if(blockCenter) {
    color = COLORS[globalIndex]
  }
  return {
    type: 'geo',
    x: x,
    y: y,
    isLocked: true,
    opacity: globalCenter || blockCenter ? 1: 0.5,
    props: {
      w: CELL_WIDTH-8,
      h: CELL_HEIGHT-8,
      geo: "rectangle",
      color,
      labelColor: 'black',
      fill: globalCenter || blockCenter ? "fill" : "semi",
      dash: "draw",
    },
  }
}

function buildBlock(baseX: number, baseY: number, globalCenter: boolean, globalIndex: number) {
  const shapes = []
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const blockCenter = i == 1 && j == 1
      const blockIndex = i + j * 3
      const x = baseX + CELL_WIDTH * i
      const y = baseY + CELL_HEIGHT * j
      shapes.push(buildCell(x, y, globalCenter, blockCenter, globalIndex, blockIndex))
    }
  }
  return shapes
}

function buildBoard() {
  return {
    type: 'geo',
    x: -W_GAP,
    y: -H_GAP,
    isLocked: true,
    props: {
      w: CELL_WIDTH * 9 + W_GAP * 4,
      h: CELL_HEIGHT * 9 + H_GAP * 4,
      geo: "rectangle",
      color: 'white',
      labelColor: 'black',
      fill: "fill",
      dash: "draw",
    }
  }
}
export function buildMandalartShape() {
  const shapes = [buildBoard()]

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const center = i == 1 && j == 1
      const index = i + j * 3
      shapes.push(...buildBlock(
        (W_GAP + CELL_WIDTH * 3) * i,
        (H_GAP + CELL_HEIGHT * 3) * j,
        center,
        index,
      ))
    }
  }

  return shapes
}
