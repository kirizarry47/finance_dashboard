// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
 

//grabbing types from createPalette
declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}