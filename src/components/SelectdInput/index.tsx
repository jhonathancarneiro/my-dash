import React from "react";
import { Container } from "./styles";

interface SelectIputProps {
  options: {
    value?: string | number;
    label?: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | number;
}

export default function SelectdInput({
  options,
  onChange,
  defaultValue,
}: SelectIputProps) {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}
