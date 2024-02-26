import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";

export default function AddForm() {
  const { handleAdd } = useContext(OrderContext);

  const newProduct = {
    // id: new Date().getTime(),
    id: crypto.randomUUID(),
    title: "nouveau produit",
    imageSource: "/images/ice-cream.png",
    price: 5.65,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd(newProduct);
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">
        <input type="text" placeholder="Nom du produit (ex: Super Burger)" />
        <input type="text" placeholder="Lien URl Image" />
        {/* Lien URL d'une image (ex: https://la-photo-de-mon-produit.png) */}
        <input type="text" placeholder="Prix" />
      </div>
      <button className="submit-button">
        Ajouter un nouveau produit au menu
      </button>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .image-preview {
    background: red;
    grid-area: 1 / -3 / 4 / 2;
  }

  .input-fields {
    grid-area: 1 / 2 / 4 / 4;
    display: grid;
  }

  .submit-button {
    background: green;
    grid-area: 4 / 2 / 5 / 5;
    width: 60%; //expected 50% : before refacto CSS keep 60%
  }
`;
