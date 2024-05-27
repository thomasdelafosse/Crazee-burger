import styled from "styled-components";
import HintMessage from "./HintMessage";

export default function EditForm() {
  return (
    <div>
      <EditFormStyled>
        <HintMessage />
      </EditFormStyled>
    </div>
  );
}

const EditFormStyled = styled.form`
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
