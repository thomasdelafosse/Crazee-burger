import styled from "styled-components";
import Total from "../BasketHeader/BasketHeader";
import Footer from "../BasketFooter";
import { useOrderContext } from "../../../../../../context/OrderContext";
import BasketProducts from "./BasketProducts";
import { theme } from "../../../../../../theme/index";
import { isEmpty } from "../../../../../utils/array";
import EmptyBasket from "./EmptyBasket";

export default function BasketBody() {
  const { basket, menu } = useOrderContext();

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
