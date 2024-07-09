import { useContext } from "react";
import styled from "styled-components";
import { IMAGE_COMING_SOON } from "../../../../../enums/product";
import BasketCard from "./basketCard.jsx";
import OrderContext from "../../../../../context/OrderContext";
import { findObjectById } from "../../../../utils/array.jsx";
import { checkIfProductIsClicked } from "../MainRightSide/Menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu);
          return (
            <CSSTransition
              appear={true}
              classNames={"transition-product"}
              key={basketProduct.id}
              timeout={500}
            >
              <div className="basket-card">
                <BasketCard
                  {...menuProduct}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : IMAGE_COMING_SOON
                  }
                  quantity={basketProduct.quantity}
                  onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                  $isClickable={isModeAdmin}
                  onClick={
                    isModeAdmin
                      ? () => handleProductSelected(basketProduct.id)
                      : null
                  }
                  $isSelected={checkIfProductIsClicked(
                    basketProduct.id,
                    productSelected.id,
                  )}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .transition-product-appear {
    transform: translateX(100px);
    opacity: 0%;
  }

  .transition-product-appear-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 100%;
  }

  .transition-product-enter {
    transform: translateX(100px);
    opacity: 0%;
  }
  .transition-product-enter-active {
    transform: translateX(0px);
    transition: 0.5s;
    opacity: 100%;
  }

  .transition-product-exit {
    transform: translateX(0px);
    opacity: 100%;
  }

  .transition-product-exit-active {
    transform: translateX(-100px);
    transition: 0.5s;
    opacity: 0%;
  }

  .basket-card {
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }
`;
