import { ButtonHTMLAttributes, HTMLProps } from "react";
import { Container } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string | number;
}

export function Button({ label, onClick }: Props) {
  return <Container onClick={onClick}>{label}</Container>;
}
