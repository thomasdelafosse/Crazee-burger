import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function NavBar({ id, inputValue }) {
  return (
    <NavBarStyled>
      <div className="topLeft">
        <Link to={`/order/${inputValue}`}>
          <Logo />
        </Link>
      </div>
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
  background: grey;
  height: 10vh;
  display: flex;
  justify-content: space-between;

  .topLeft {
    transform: scale(0.3);
    background: blue;
  }

  .topRight {
    background: red;
  }
`;
