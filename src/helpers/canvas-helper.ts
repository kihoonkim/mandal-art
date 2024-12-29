import {DefaultColorThemePalette} from "tldraw";

const OVERWRITE_COLOR = [
  '#fbf8cc',
  '#fde4cf',
  '#ffcfd2',
  '#f1c0e8',
  '#cfbaf0',
  '#a3c4f3',
  '#90dbf4',
  '#98f5e1',
  '#b9fbc0',
]
type DefaultColorStyle = "black" | "blue" | "green" | "grey" | "light-blue" | "light-green" | "light-red" | "light-violet" | "orange" | "red" | "violet" | "white" | "yellow"

export const COLORS: DefaultColorStyle[] = [
  "light-red",
  "orange",
  "light-green",
  "light-blue",
  "light-violet",
  "grey",
  "violet",
  "blue",
  "yellow",
  "green",
]

export function configureCanvas() {
  COLORS.forEach((color, index) => {
    DefaultColorThemePalette.lightMode[color].solid = OVERWRITE_COLOR[index]
    DefaultColorThemePalette.lightMode[color].semi = OVERWRITE_COLOR[index]
    DefaultColorThemePalette.lightMode[color].pattern = OVERWRITE_COLOR[index]
    DefaultColorThemePalette.lightMode[color].fill = OVERWRITE_COLOR[index]
  })
}
