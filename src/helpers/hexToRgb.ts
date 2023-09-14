export function hexToRgb(hex: string, isPercent = false): string {
  // Get rid of # if present.
  const hexString = hex[0] == "#" ? hex.substring(1, hex.length) : hex;

  // RGB value
  let rgbValue;

  // Set default of r, g and b value to 0, so that if ther hex value is not
  // corrct, we can return a rgb value of black.
  let r = "0",
    g = "0",
    b = "0";

  // Add 0x before the hex strings so that we can conver it to actual
  // hex numbers
  if (hexString.length == 3) {
    // color code with 3 values: #fff
    r = "0x" + hexString[0] + hexString[0];
    g = "0x" + hexString[1] + hexString[1];
    b = "0x" + hexString[2] + hexString[2];
  }

  if (hexString.length == 6) {
    // color code with 6 values: #ffffff
    r = "0x" + hexString[0] + hexString[1];
    g = "0x" + hexString[2] + hexString[3];
    b = "0x" + hexString[4] + hexString[5];
  }

  // Setup r, g, b value if the user wants percentage
  if (isPercent) {
    r = String(+((+r / 255) * 100).toFixed(1));
    g = String(+((+g / 255) * 100).toFixed(1));
    b = String(+((+b / 255) * 100).toFixed(1));

    rgbValue = `rgb(${+r}%, ${+g}%, ${+b}%)`;
  } else {
    rgbValue = `rgb(${+r}, ${+g}, ${+b})`;
  }

  // Conver the hex number to base two numbers and return
  return rgbValue;
}
