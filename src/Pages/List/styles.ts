import styled from "styled-components";

export const Container = styled.div``;
export const Content = styled.div``;
export const Filters = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .tag-filter {
    font-size: 18px;
    font-weight: 500;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.white};
    margin: 0 10px;
    transition: opacity 0.3s;
    margin-bottom: 30px;

    :hover {
      opacity: 0.7;
    }
  }
  .tag-recurrent::after {
    content: "";
    display: block;
    width: 50px;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.warning};
  }
  .tag-eventual::after {
    content: "";
    display: block;
    width: 50px;
    margin: 0 auto;
    border-bottom: 10px solid ${(props) => props.theme.colors.success};
  }
`;
