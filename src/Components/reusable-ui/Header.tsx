import styled from "styled-components";
import { theme } from "../../theme";
import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  return <HeaderStyled>{children}</HeaderStyled>;
}

const HeaderStyled = styled.div`
  height: 70px;
  background: ${theme.colors.background_dark};
  padding: 0 16px;
`;
