import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";
import NavBarRightSide from "./NavBarRightSide";
import { theme } from "../../../theme";

export default function NavBar({ inputValue }) {
  return (
    <NavBarStyled>
      <Link to={`/order/${inputValue}`}>
        <Logo />
      </Link>
      <NavBarRightSide id={inputValue} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background-color: #ffffff;
  border-radius: 15px 15px 0px 0px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
