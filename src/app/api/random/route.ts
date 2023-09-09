import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";
import randomNumber from "random-number-csprng";

interface IOptions {
  lcaz?: Boolean;
  ucaz?: Boolean;
  sc?: Boolean;
  nums?: boolean;
}

async function shuffleString(string: string): Promise<string> {
  if (!string.length) return "";

  const stringArray = string.split("");

  for (let i = string.length - 1; i > 0; i--) {
    var j = Math.floor(await randomNumber(0, string.length - 1));
    var tmp = stringArray[i];
    stringArray[i] = stringArray[j];
    stringArray[j] = tmp;
  }

  return stringArray.join("");
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const generatedCharsArray = [];

  const charObj = {
    lcaz: "abcdefghijklmnopqrstuvwxyz",
    ucaz: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    nums: "0123456789",
    sc: "!@#$%^&*",
  };

  let passwordLength = 6;

  const options: IOptions = {
    lcaz: true,
  };

  searchParams.forEach((param, label) => {
    if (label === "length" && Number(param) > 6) {
      const length = Number(param);
      passwordLength = length > 128 ? 128 : length;
    }

    if (
      label === "ucaz" ||
      label === "lcaz" ||
      label === "nums" ||
      label === "sc"
    ) {
      options[label as keyof IOptions] = true;
    }

    if (
      (label === "ucaz" || label === "sc" || label === "nums") &&
      typeof searchParams.get("lcaz") !== "string"
    ) {
      delete options.lcaz;
    }
  });

  if (searchParams.size < 1) {
    options.lcaz = true;
  }

  const totalCharsFromEachOption = Math.floor(
    passwordLength / Object.keys(options).length
  );

  let remainingChars = passwordLength % Object.keys(options).length;

  for (const key in options) {
    let charsToAdd = 0;

    if (remainingChars > 1) {
      charsToAdd = await randomNumber(0, remainingChars);
    } else if (remainingChars > 0) {
      charsToAdd = remainingChars;
    }

    const nanoid = customAlphabet(
      charObj[key as keyof typeof charObj],
      totalCharsFromEachOption + charsToAdd
    );

    remainingChars -= charsToAdd;

    generatedCharsArray.push(nanoid());
  }

  return NextResponse.json({
    length: passwordLength,
    password: await shuffleString(generatedCharsArray.join("")),
    options,
  });
}
