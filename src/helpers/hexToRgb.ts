export function hexToRgb(hex: string): string {
  // Get rid of # is present
  const hexString = hex.indexOf("#") > -1 ? hex.substring(1, hex.length) : hex;

  let r = "0",
    g = "0",
    b = "0";

  if (hexString.length == 3) {
    r = "0x" + hexString[0] + hexString[0];
    g = "0x" + hexString[1] + hexString[1];
    b = "0x" + hexString[2] + hexString[2];
  }

  if (hexString.length == 6) {
    r = "0x" + hexString[0] + hexString[1];
    g = "0x" + hexString[2] + hexString[3];
    b = "0x" + hexString[4] + hexString[5];
  }

  return `rgb(${+r}, ${+g}, ${+b})`;
}
