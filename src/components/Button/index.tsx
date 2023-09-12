"use client";
import { Button as ButtonType } from "@/utils/interfaces";
import { Button as FlowButton, Spinner } from "flowbite-react";

const Button = ({
  children,
  onClick = () => {},
  loading = false,
  disabled = false,
  className = "",
}: ButtonType) => {
  return (
    <FlowButton onClick={onClick} disabled={disabled} className={className}>
      {children}
      {loading && <Spinner className="ml-1" size="sm" />}
    </FlowButton>
  );
};

export default Button;
