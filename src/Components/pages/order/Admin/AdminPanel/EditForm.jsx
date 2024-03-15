import styled from "styled-components";
import { theme } from "../../../../../theme";
import { HiCursorClick } from "react-icons/hi";

export default function EditForm() {
  return (
    <div>
      <EditFormStyled>
        Cliquer sur un produit pour le modifier
        <HiCursorClick />
      </EditFormStyled>
    </div>
  );
}

const EditFormStyled = styled.form`
  font-family: "Amatic SC", cursive;
  width: 400px;
  color: ${theme.colors.greyBlue};
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;
