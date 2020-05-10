import colors from "@styles/colors"
import fonts from "@styles/fonts"
import breakpoints from "@styles/breakpoints"
import transitions, { colorModeTransition } from "@styles/transitions"
import styles from "@styles/styles"

const theme = {
  useCustomProperties: true,
  useBodyStyles: true,
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  useBorderBox: true,
  useLocalStorage: true,
  colors,
  fonts,
  breakpoints,
  transitions,
  colorModeTransition,
  styles,
}

export default theme
