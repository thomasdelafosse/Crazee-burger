import styled from "styled-components";
import Total from "../BasketHeader/BasketHeader.jsx";
import Footer from "../BasketFooter.jsx";

import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import BasketProducts from "./BasketProducts.jsx";
import { theme } from "../../../../../../theme/index.jsx";
import { isEmpty } from "../../../../../utils/array.jsx";
import EmptyBasket from "./EmptyBasket.jsx";

export default function BasketBody() {
  const { basket, menu } = useContext(OrderContext);

  return (
    <BasketBodyStyled>
      <Total />
      {isEmpty(basket) ? (
        <EmptyBasket isLoading={menu === undefined} />
      ) : (
        <BasketProducts />
      )}
      <Footer />
    </BasketBodyStyled>
  );
}

const BasketBodyStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.basket};
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  height: 85vh;

  .head {
    position: sticky;
    top: 0;
  }

  .footer {
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    position: sticky;
    bottom: 0;
  }
`;
