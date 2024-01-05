import { Link, useParams } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavBar from "./NavBar";
import MainPage from "./MainPage";

export default function OrderPage() {
  const { inputValue } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar id={inputValue} />
        <MainPage />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }

  .topLeft {
    transform: scale(0.4);
  }
`;
