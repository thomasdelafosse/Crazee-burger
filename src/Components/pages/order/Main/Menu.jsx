import styled from "styled-components";
import CardStyled from "../../../reusable-ui/Card";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import { formatPrice } from "/src/Components/utils/maths";

export default function Menu() {
  const [menu, setMenu] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <CardStyled
            key={id}
            title={title}
            imageSource={imageSource}
            leftDescription={formatPrice(price)}
          />
        );
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;
  overflow-y: scroll;
`;

{
  /* return (
   <menuStyled> 
    <CardStyled
      image={"/images/burger-bacon-egg.png"}
      title={"Burger Smoke BBQ"}
      price={"priceReduce"}
    />; 
  </menuStyled>)*/
}
