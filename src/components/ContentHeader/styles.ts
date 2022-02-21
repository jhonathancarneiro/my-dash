import styled from "styled-components";

interface TitleContainerPoprs {
  lineColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const TitleContainer = styled.div<TitleContainerPoprs>`
  > h1 {
    color: ${(props) => props.theme.colors.white};
  }

  & ::after {
    content: "";
    display: block;
    width: 50px;
    border-bottom: 10px solid ${(props) => props.lineColor};
  }
`;

export const Controllers = styled.div`
  display: flex;
`;
