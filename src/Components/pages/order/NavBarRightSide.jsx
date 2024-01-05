import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBarRightSide({ id }) {
  return (
    <NavBarRightSideStyled>
      <h1>Hey {id}</h1>
      <Link to="/">
        <button>Se déconnecter</button>
        <BsPersonCircle className="icon" />
      </Link>
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  background: red;
`;
