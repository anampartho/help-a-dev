"use client";
import React, { useEffect, useState } from "react";
import { Dropdown, Textarea } from "flowbite-react";
import { toast } from "react-toastify";

const URLEncoder = () => {
  const [action, setAction] = useState("encode");
  const [originalString, setOriginalString] = useState("");
  const [convertedString, setConvertedString] = useState("");

  const handleEncodeDecode = () => {
    try {
      if (action === "encode") {
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
  }, [originalString]);

  return (
    <>
      <div className="flex items-center mb-4 gap-4">
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
        <div className="flex justify-center rounded h-40 dark:bg-gray-800">
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
