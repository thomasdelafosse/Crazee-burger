import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProfileStyled from "./profile";

export default function NavBarRightSide({}) {
  return (
    <NavBarRightSideStyled>
      {/* <div className="admin-button">ACTIVER LE MODE ADMIN</div> */}
      <ProfileStyled />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: yellow;
  } */
`;
