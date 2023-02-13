type HexColor = string;

export function addOpacity(color: HexColor, opacity = 0.07): string {
  // convert the opacity to 2 digit hex
  let hexOpacity = Math.round(opacity * 255).toString(16);
  if (hexOpacity.length === 1) {
    hexOpacity = `0${hexOpacity}`;
  }

  // return the HEXA color string
  return `${color}${hexOpacity}`;
}
