import { useMemo } from "react";

import emojis from "../../utils/emojis";
import Toggle from "../../components/toggle";
import { Container, Profile, Welcome, UserName } from "./styles";

export default function Header() {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);
  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome> Olá {emoji}</Welcome>
        <UserName>Akolr</UserName>
      </Profile>
    </Container>
  );
}
