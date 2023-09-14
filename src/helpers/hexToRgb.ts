export function hexToRgb(hex: string, isPercent = false): string {
  /* Example output:
    {
      rgb: "rgb(255, 255, 255)",
      rgba: "rgba(255, 255, 255, 1)",
      rgbWithSpace: "rgb(255 255 255)",
      rgbaWithSpace: "rgba(255 255 255 / 1)",
      rgbPercentage: "rgb(100%, 100%, 100%)",
      rgbaPercentage: "rgba(100%, 100%, 100%, 100%)",
      rgbPercentageWithSpace: "rgb(100% 100% 100%)",
      rgbaPercentageWithSpace: "rgba(100% 100% 100% / 100%)",
    }
  */

  // Declare the output object which will be returned
  let output = {
    rgb: "",
    rgba: "",
    rgbWithSpace: "",
    rgbaWithSpace: "",
    rgbPercentage: "",
    rgbaPercentage: "",
    rgbPercentageWithSpace: "",
    rgbaPercentageWithSpace: "",
  };

  // Get rid of # if present.
  let hexString = hex[0] == "#" ? hex.substring(1, hex.length) : hex;

  // Check if given hex code has alpha value
  const isAlpha = hexString.length === 4 || hexString.length == 8;

  // Alpha Value & RGB value
  let alphaValue, rgbValue;

  // Set proper hexString and alphaValue
  if (hexString.length == 4) {
    alphaValue = hexString.substring(3, hexString.length);
    hexString = hexString.substring(0, 3);
  } else if (hexString.length == 8) {
    alphaValue = hexString.substring(6, hexString.length);
    hexString = hexString.substring(0, 6);
  }

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

  if (isAlpha) {
    alphaValue = +(+("0x" + alphaValue) / 255).toFixed(3);
    rgbValue = `rgba(${+r}, ${+g}, ${+b}, ${alphaValue})`;

    if (isPercent) {
      alphaValue = +(alphaValue * 100).toFixed(1);
      rgbValue = `rgba(${+r}%, ${+g}%, ${+b}%, ${alphaValue}%)`;
    }
  }

  // Conver the hex number to base two numbers and return
  return rgbValue;
}
