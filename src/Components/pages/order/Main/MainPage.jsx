import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import MenuStyled from "./Menu";
import AdminPanelStyled from "../Admin/AdminPanel";

export default function MainPage() {
  return (
    <MainPageStyled>
      <MenuStyled />
      <AdminPanelStyled />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  flex: 1;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  overflow: auto;
`;
