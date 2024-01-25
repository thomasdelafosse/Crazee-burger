import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import MenuStyled from "./Menu";

export default function MainPage() {
  return (
    <MainPageStyled>
      <MenuStyled />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  flex: 1; // you can also use "height: calc(95vh - 10vh)";
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
`;
