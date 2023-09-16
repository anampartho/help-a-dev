interface Output {
  rgb: string | null;
  rgba: string | null;
  rgbWithSpace: string | null;
  rgbaWithSpace: string | null;
  rgbPercentage: string | null;
  rgbaPercentage: string | null;
  rgbPercentageWithSpace: string | null;
  rgbaPercentageWithSpace: string | null;
}
export function hexToRgb(hex: string, isPercent = false): Output {
  // Output variable
  // this is the default output of this function
  let output: Output = {
    rgb: "rgb(255, 255, 255)",
    rgba: "rgba(255, 255, 255, 1)",
    rgbWithSpace: "rgb(255 255 255)",
    rgbaWithSpace: "rgba(255 255 255 / 1)",
    rgbPercentage: "rgb(100%, 100%, 100%)",
    rgbaPercentage: "rgba(100%, 100%, 100%, 100%)",
    rgbPercentageWithSpace: "rgb(100% 100% 100%)",
    rgbaPercentageWithSpace: "rgba(100% 100% 100% / 100%)",
  };

  // Get rid of # if present.
  let hexString = hex[0] == "#" ? hex.substring(1, hex.length) : hex;

  // Check if given hex code has alpha value
  const isAlpha = hexString.length === 4 || hexString.length == 8;

  // Alpha Value & RGB value
  let alphaValue: string | number = isAlpha ? "" : "ff",
    alphaValuePercent;

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
    b = "0",
    rPercent = "0",
    gPercent = "0",
    bPercent = "0";

  // Add 0x before the hex strings so that we can conver it to actual
  // hex numbers
  if (hexString.length == 3) {
    // color code with 3 values: #fff
    r = String(+("0x" + hexString[0] + hexString[0]));
    g = String(+("0x" + hexString[1] + hexString[1]));
    b = String(+("0x" + hexString[2] + hexString[2]));
  }

  if (hexString.length == 6) {
    // color code with 6 values: #ffffff
    r = String(+("0x" + hexString[0] + hexString[1]));
    g = String(+("0x" + hexString[2] + hexString[3]));
    b = String(+("0x" + hexString[4] + hexString[5]));
  }

  // Setup r, g, b value if the user wants percentage
  rPercent = String(+((+r / 255) * 100).toFixed(1));
  gPercent = String(+((+g / 255) * 100).toFixed(1));
  bPercent = String(+((+b / 255) * 100).toFixed(1));

  alphaValue = +(+("0x" + alphaValue) / 255).toFixed(3);
  alphaValuePercent = +(alphaValue * 100).toFixed(1);

  output = {
    rgb: alphaValue != 1 ? null : `rgb(${r}, ${g}, ${b})`,
    rgba: `rgba(${r}, ${g}, ${b}, ${alphaValue})`,
    rgbWithSpace: alphaValue != 1 ? null : `rgb(${r} ${g} ${b})`,
    rgbaWithSpace: `rgba(${r} ${g} ${b} / ${alphaValue})`,
    rgbPercentage:
      alphaValue != 1 ? null : `rgb(${rPercent}%, ${gPercent}%, ${bPercent}%)`,
    rgbaPercentage: `rgba(${rPercent}%, ${gPercent}%, ${bPercent}%, ${alphaValuePercent}%)`,
    rgbPercentageWithSpace:
      alphaValue != 1 ? null : `rgb(${rPercent}% ${gPercent}% ${bPercent}%)`,
    rgbaPercentageWithSpace: `rgba(${rPercent}% ${gPercent}% ${bPercent}% / ${alphaValuePercent}%)`,
  };

  // Conver the hex number to base two numbers and return
  return output;
}
