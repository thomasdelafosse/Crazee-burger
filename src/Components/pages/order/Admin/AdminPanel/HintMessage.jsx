import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function HintMessage() {
  return (
    <HintMessageStyled>
      Cliquer sur un produit pour le modifier
      <HiCursorClick />
    </HintMessageStyled>
  );
}

const HintMessageStyled = styled.div`
  font-family: "Amatic SC", cursive;
  width: 400px;
  color: ${theme.colors.greyBlue};
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
`;
