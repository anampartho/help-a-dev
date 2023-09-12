"use client";
import React, { useEffect, useState } from "react";
import { Dropdown, Textarea, Checkbox, Label } from "flowbite-react";
import { toast } from "react-toastify";
import CopyToClipboard from "@/components/CopyToClipboard";

const URLEncoder = () => {
  const [action, setAction] = useState("encode");
  const [originalString, setOriginalString] = useState("");
  const [convertedString, setConvertedString] = useState("");
  const [encodeEntireUrl, seteEncodeEntireUrl] = useState(false);

  const handleEncodeDecode = () => {
    let encodedString;
    try {
      if (encodeEntireUrl && action === "encode") {
        setConvertedString(encodeURIComponent(originalString));
      } else if (encodeEntireUrl && action === "decode") {
        setConvertedString(decodeURIComponent(originalString));
      } else if (!encodeEntireUrl && action === "encode") {
        setConvertedString(encodeURI(originalString));
      } else {
        setConvertedString(decodeURI(originalString));
      }
    } catch (e: unknown) {
      toast.error((e as Error).message);
    }
  };

  useEffect(() => {
    const oldOriginalString = originalString;
    const oldConvertedString = convertedString;

    setOriginalString(oldConvertedString);
    setConvertedString(oldOriginalString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action]);

  useEffect(() => {
    handleEncodeDecode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalString, encodeEntireUrl]);

  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-4">
          <Dropdown label={action === "encode" ? "Encode" : "Decode"} size="sm">
            <Dropdown.Item
              onClick={() => {
                setAction("encode");
              }}
            >
              Encode
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setAction("decode");
              }}
            >
              Decode
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="encodeEntireUrl"
            onChange={(e) => {
              seteEncodeEntireUrl(e.target.checked);
            }}
          />
          <Label htmlFor="encodeEntireUrl">Encode Entire URL</Label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center rounded h-40 dark:bg-gray-800">
          <Textarea
            id="input-string"
            rows={4}
            value={originalString}
            onChange={(e) => {
              setOriginalString(e.target.value);
            }}
          ></Textarea>
        </div>
        <div className="flex justify-center rounded h-40 dark:bg-gray-800 relative">
          <CopyToClipboard text={convertedString} />
          <Textarea
            id="input-string"
            rows={4}
            value={convertedString}
            readOnly
          ></Textarea>
        </div>
      </div>
    </>
  );
};

export default URLEncoder;
