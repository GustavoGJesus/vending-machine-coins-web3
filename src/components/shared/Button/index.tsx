import { ReactNode } from "react";
import { ButtonComponent } from "./styles"

export interface ButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}