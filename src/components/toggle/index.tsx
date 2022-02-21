import { useState } from "react";
import { Container, ToggleLabel,ToggleSelector } from "./styles";
export default function Toggle() {

  const [online, setOnline] = useState(false)
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector checked={online}
      uncheckedIcon={false}
      checkedIcon={false} onChange={()=> setOnline(!online)} />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
}
