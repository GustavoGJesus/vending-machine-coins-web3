import styled from "styled-components";
import { ButtonProps } from ".";

export const ButtonComponent = styled.button<ButtonProps>`
  outline: none;
  padding: 15px 30px 15px 30px;
  border: none;
  border-radius: 30px;
  background-color: ${(props) =>
    (props.variant === "primary" && "#2E8E99") ||
    (props.variant === "secondary" && "#133364")};
  color: #2e2d42;
  cursor: pointer;
  font-weight: bold;
  font-size: 19px;

  &:hover {
    filter: brightness(0.8);
  }
`;