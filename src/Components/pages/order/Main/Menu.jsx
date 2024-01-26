import styled from "styled-components";
import CardStyled from "./Card";

export default function Menu() {
  return (
    <MenuStyled>
      <CardStyled />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  grid-row-gap: 60px;
`;
