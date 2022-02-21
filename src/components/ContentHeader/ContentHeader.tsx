import { Container, Controllers, TitleContainer } from "./styles";

import SelectdInput from "../SelectdInput";
import React from "react";

interface ContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

export default function ContentHeader({
  title,
  lineColor,
  children,
}: ContentHeaderProps) {
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>
      <Controllers>{children}</Controllers>
    </Container>
  );
}
