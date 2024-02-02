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
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 92.5px 150px;

  display: grid;
  grid-template-columns: repeat(4, 20%);
  column-gap: 85px;
  row-gap: 60px;
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
