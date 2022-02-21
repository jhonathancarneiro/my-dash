import { Container } from "./styles";

export default function Content({ ...props }) {
  return <Container>{props.children}</Container>;
}
