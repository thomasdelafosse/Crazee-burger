import styled from "styled-components";
import CardStyled from "../../../../reusable-ui/Card";
import { theme } from "../../../../../theme";
import { useContext, useRef } from "react";
import { formatPrice } from "/src/Components/utils/maths";
import OrderContext from "../../../../../context/OrderContext";
import EmptyMenuClient from "./EmptyMenuClient";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import UserContext from "../../../../../context/UserContext";

const DEFAULT_IMAGE = "/images/coming-soon.png";

export default function Menu() {
  const { menu, isModeAdmin, handleDelete, resetMenu } =
    useContext(OrderContext);
  const { username } = useContext(UserContext);
  const inputBaliseRef = useRef();

  const handleClick1 = () => {
    alert("handleClick1");
    console.log("inputBaliseRef.current :", inputBaliseRef.current);
    inputBaliseRef.current.focus();
  };

  if (menu.length === 0) {
    if (!isModeAdmin) return <EmptyMenuClient />;
    return <EmptyMenuAdmin onReset={resetMenu} />;
  }

  return (
    <div>
      <MenuStyled>
        {menu.map(({ id, title, imageSource, price }) => {
          return (
            <CardStyled
              key={id}
              title={title}
              imageSource={imageSource ? imageSource : DEFAULT_IMAGE}
              leftDescription={formatPrice(price)}
              hasDeleteButton={isModeAdmin}
              onDelete={() => handleDelete(id)}
            />
          );
        })}
        <button onClick={handleClick1}>TEST</button>
        <input ref={inputBaliseRef} type="text" placeholder="inputTest"></input>
      </MenuStyled>
    </div>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: ${theme.shadows.strong};
  overflow-y: scroll;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
