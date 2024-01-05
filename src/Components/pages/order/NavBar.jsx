import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar({ id }) {
  return (
    <NavBarStyled>
      NAVBARBLUE
      <div className="topRight">
        <h1>Hey {id}</h1>
        <Link to="/">
          <button>Se déconnecter</button>
          <BsPersonCircle className="icon" />
        </Link>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background: blue;
  height: 10vh;
`;
