import { InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ value }: Props) {
  return (
    <Container>
      <input type="text" disabled value={value} />
    </Container>
  );
}
