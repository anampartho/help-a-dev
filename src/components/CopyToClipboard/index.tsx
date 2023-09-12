import React, { useState } from "react";
import { AiOutlineCopy, AiOutlineCheck } from "react-icons/ai";
import Button from "@/components/Button";
import { toast } from "react-toastify";

const CopyToClipboard = ({ text }: { text?: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string | undefined) {
    if (!text) return;

    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopy = () => {
    copyTextToClipboard(text)
      .then(() => {
        setIsCopied(true);
        toast.success("Successfully copied to clipboard!");

        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Button
        className="absolute top-1 right-1"
        onClick={handleCopy}
        disabled={!text}
      >
        {isCopied ? <AiOutlineCheck /> : <AiOutlineCopy />}
      </Button>
    </>
  );
};

export default CopyToClipboard;
