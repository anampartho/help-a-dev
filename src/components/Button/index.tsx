"use client";
import { IButton } from "@/utils/interfaces";
import { Button as FlowButton, Spinner } from "flowbite-react";

const Button = ({ children, onClick = () => {} }: IButton) => {
  return (
    <FlowButton onClick={onClick}>
      <Spinner />
      <span className="pl-3">{children}</span>
    </FlowButton>
  );
};

export default Button;
