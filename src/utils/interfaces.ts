import { ReactNode, MouseEventHandler } from "react";

export type Button = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  loading?: Boolean;
};
