import { NextResponse } from "next/server";
import { customAlphabet } from "nanoid";

interface IOptions {
  lcaz?: Boolean;
  ucaz?: Boolean;
  sc?: Boolean;
  nums?: boolean;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);

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
      (label === "ucaz" || label === "nums" || label === "sc") &&
      param === "true"
    ) {
      options[label] = true;
      delete options.lcaz;
    }

    if (label === "lcaz" && param === "true") {
      options.lcaz = true;
    }
  });

  if (searchParams.size < 1) {
    options.lcaz = true;
  }

  const totalCharsFromEachOption = Math.floor(
    passwordLength / Object.keys(options).length
  );

  let customAlphabetString = "";

  for (const key in options) {
    const nanoid = customAlphabet(
      charObj[key as keyof typeof charObj],
      totalCharsFromEachOption
    );
    customAlphabetString += nanoid();
  }

  const nanoid = customAlphabet(customAlphabetString, passwordLength);

  return NextResponse.json({ password: nanoid() });
}
