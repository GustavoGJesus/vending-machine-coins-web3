import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { ButtonComponent } from "./styles"

export interface ButtonProps {
  variant: "primary" | "secondary";
  children: ReactNode;
  onClick: () => void
}

export function Button({ children, ...props }: ButtonProps) {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
}