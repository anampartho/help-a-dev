export function rgbToHex(rgb: string): string {
  // Set seperator based on the rgb string provided
  // checks for both rgb and rgba string.
  // Example:
  // 1. rgb(255, 255, 255)
  // 2. rgba(255, 255, 255, 1)
  // 3. rgb(255 255 255)
  // 4. rgba(255 255 255 / 1)
  // 5. rgb(100%, 100%, 100%)
  // 6. rgba(100%, 100%, 100%, 100%)
  // 7. rgb(100% 100% 100%)
  // 8. rgba(100% 100% 100% / 100%)
  const seperator = rgb.indexOf(",") > -1 ? "," : " ";

  // Array containing hex values converted from the rgbArray
  const hexArray: string[] = [];

  // Check if it is rgba
  const isRgba = rgb.indexOf("rgba") > -1;

  // Remove slash from string if present
  // make sure to replace the space before it as well or we will have an
  // empty string inside the rgbArray
  rgb = rgb.replace(" /", "");

  // Convert the color string to an array
  const rgbArray = rgb
    .substring(isRgba ? 5 : 4)
    .split(")")[0]
    .split(seperator);

  // Convert rgb values from rgbArray to hex values and add it to the hexArray
  rgbArray.forEach((colorValue, index) => {
    let trimmedColorValue = colorValue.trim();
    let hexValue = trimmedColorValue;

    // Convert the percentage value to proper rgb value
    // so 100% becomes 255 => (100 / 100) * 255
    if (trimmedColorValue.indexOf("%") > -1) {
      hexValue = String(
        Math.round(
          (+trimmedColorValue.substring(0, trimmedColorValue.length - 1) /
            100) *
            255
        )
      );
    }

    // If the index is 3, this is the alpha value,
    // check if it is less than or equal to 1 becuase,
    // if percentage format is used then rather than being 0.9 it will be 90% and
    // we don't want to do any rounding as it is already rounded.
    // Then multiply it with 255 and then round the value
    // So, alpha value of 0.4 becomes -> 102
    if (index == 3 && +hexValue <= 1) {
      hexValue = String(Math.round(+hexValue * 255));
    }

    // Conver hexValue to a number and then to a hex string
    hexValue = (+hexValue).toString(16);

    // If only one hex value is present, then add a leading 0
    if (hexValue.length == 1) hexValue = "0" + hexValue;

    // Push the hex values to the hexArray
    hexArray.push(hexValue);
  });

  // Return the Hex string
  return "#" + hexArray.join("");
}
