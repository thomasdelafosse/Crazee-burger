import { useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./Navbar/NavBar";
import { useOrderContext } from "../../../context/OrderContext";
import { useParams } from "react-router-dom";
import { initialiseUserSession } from "./helpers/initialiseUserSession";

export default function OrderPage() {
  // state

  const { username } = useParams();
  const { setMenu, setBasket } = useOrderContext();

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket);
  }, []);

  //affichage (render)
  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
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
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
