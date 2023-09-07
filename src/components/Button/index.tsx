"use client";
import { IButton } from "@/utils/interfaces";

const Button = ({ children, onClick = () => {} }: IButton) => {
  return (
    <button
      className="text-xl px-4 py-[10px] rounded-lg bg-[#7F56D9] hover:bg-[#6941C6] text-white transition-[background]"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
