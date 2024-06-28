import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo.jsx";
import { theme } from "../../../../theme/index.jsx";
import { refreshPage } from "../../../utils/window.jsx";
import NavBarRightSide from "./NavBarRightSide.jsx";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo className="logo-order-page" onClick={() => refreshPage()} />
      <NavBarRightSide />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  border-bottom: 1px solid ${theme.colors.greyLight};
  /* align-items: center; */

  .logo-order-page {
    cursor: pointer;
  }
`;
