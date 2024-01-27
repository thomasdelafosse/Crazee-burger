import styled from "styled-components";
import CardStyled from "./Card";

export default function Menu() {
  return (
    <MenuStyled>
      <CardStyled
        img={"/images/burger-bacon-egg.png"}
        title={"Burger Smoke BBQ"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/burger-vegan.png"}
        title={"Vegan Burger"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/burger3.png"}
        title={"Burger poulet"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/drink1.png"}
        title={"Coke 25cl"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/drink2.png"}
        title={"Pepsi 25cl"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/drink3.png"}
        title={"Iced Tea 25cl"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/frites1.png"}
        title={"Frites Paprika"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/fries3.png"}
        title={"New York Fries"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/wedges1.png"}
        title={"Crispy Potatoes"}
        price={"priceReduce"}
      />
      <CardStyled
        img={"/images/ice-cream.png"}
        title={"Glaces artisanales"}
        price={"priceReduce"}
      />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 92.5px 150px;

  display: grid;
  grid-template-columns: repeat(4, 20%);
  column-gap: 85px;
  row-gap: 60px;
`;
