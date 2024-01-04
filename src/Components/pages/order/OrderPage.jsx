import { Link, useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import NavBar from "./NavBar";

export default function OrderPage() {
  const { inputValue } = useParams();

  return (
    <OrderPageStyled>
      <Logo />
      <NavBar className="nav" id={inputValue} />
      <Link to="/">
        <button>Se déconnecter</button>
        <BsPersonCircle className="icon" />
      </Link>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  border: 10px solid red;

  .icon {
    color: red;
  }
`;
