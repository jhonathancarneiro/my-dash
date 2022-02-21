import { Container } from "./styles";

interface SelectIputProps {
  options: {
    value?: string | number;
    label?: string | number;
  }[];
}

export default function SelectdInput({ options }: SelectIputProps) {
  return (
    <Container>
      <select>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </Container>
  );
}
