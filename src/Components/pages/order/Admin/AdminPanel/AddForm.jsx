import styled from "styled-components";

export default function AddForm() {
  return (
    <AddFormStyled>
      <div className="image-preview">Aucune image</div>
      <div className="input-fields">input fields</div>
      <div className="submit-button">SUBMIT BUTTON</div>
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
    background: green;
    grid-area: 1 / 2 / 4 / 4;
  }

  .submit-button {
    background: blueviolet;
    grid-area: 4 / 2 / 5 / 5;
  }
`;
