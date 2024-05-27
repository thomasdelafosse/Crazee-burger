import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./InputTextConfig";
import ImagePreview from "./ImagePreview";

export default function EditForm() {
  const { inputBaliseRef, newProduct, setNewProduct } =
    useContext(OrderContext);

  const inputTexts = getInputTextsConfig(newProduct);

  const handleChange = () => {
    // inputComposantRef.current.focus();
  };

  return (
    <div>
      <EditFormStyled>
        {/* Cliquer sur un produit pour le modifier
        <HiCursorClick /> */}
        {/* <input ref={inputBaliseRef} type="text" placeholder="nom"></input>
        <input type="text" placeholder="image"></input>
        <input type="text" placeholder="prix"></input> */}
        <ImagePreview
          imageSource={newProduct.imageSource}
          title={newProduct.title}
        />
        <div className="input-fields">
          {inputTexts.map((input) => (
            <TextInput
              {...input}
              ref={inputBaliseRef}
              key={input.id}
              onChange={handleChange}
              version="minimalist"
            />
          ))}
        </div>
      </EditFormStyled>
    </div>
  );
}

const EditFormStyled = styled.form`
  /* font-family: "Amatic SC", cursive;
  width: 400px;
  color: ${theme.colors.greyBlue};
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left; */

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }
`;
