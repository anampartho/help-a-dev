export function rgbToHex(rgb: string): string {
  // Set seperator based on the rgb string provided
  // checks for rgb(255, 255, 255), rgb(255 255 255),
  // rgb(100%, 100%, 100%) and rgb(100% 100% 100%)
  const seperator = rgb.indexOf(",") > -1 ? "," : " ";

  // Convert the color string to an array
  const rgbArray = rgb.substring(4).split(")")[0].split(seperator);

  // Array containing hex values converted from the rgbArray
  const hexArray: string[] = [];

  // Convert rgb values from rgbArray to hex values and add it to the hexArray
  rgbArray.forEach((colorValue) => {
    let hexValue = colorValue;

    // Convert the percentage value to proper rgb value
    // so 100% becomes 255 => (100 / 100) * 255
    if (colorValue.indexOf("%") > -1) {
      hexValue = String(
        Math.round(
          (+colorValue.substring(0, colorValue.length - 1) / 100) * 255
        )
      );
    }

    // Conver the number to hex string
    hexValue = (+hexValue).toString(16);

    // If only one hex value is present, then add a leading 0
    if (hexValue.length == 1) hexValue = "0" + hexValue;

    // Push the hex values to the hexArray
    hexArray.push(hexValue);
  });

  // Return the Hex string
  return "#" + hexArray.join("");
}
