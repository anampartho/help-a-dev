export function rgbToHex(rgb: string): string {
  // Set seperator based on the rgb string provided
  // checks for both rgb(255, 255, 255) and rgb(255 255 255)
  const seperator = rgb.indexOf(",") > -1 ? "," : " ";

  // Convert the color string to an array
  const rgbArray = rgb.substring(4).split(")")[0].split(seperator);

  // Array containing hex values converted from the rgbArray
  const hexArray: string[] = [];

  // Convert rgb values from rgbArray to hex values and add it to the hexArray
  rgbArray.forEach((colorValue) => {
    let hexValue = (+colorValue).toString(16);
    if (hexValue.length == 1) hexValue = "0" + hexValue;
    hexArray.push(hexValue);
  });

  // Return the Hex string
  return "#" + hexArray.join("");
}
