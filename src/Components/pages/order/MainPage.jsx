import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function MainPage() {
  return <MainPageStyled>MAIN VERT</MainPageStyled>;
}

const MainPageStyled = styled.div`
  background: green;
  flex: 1; // you can also use "height: calc(95vh - 10vh)";
  /* background: ${theme.colors.primary};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px; */
`;
