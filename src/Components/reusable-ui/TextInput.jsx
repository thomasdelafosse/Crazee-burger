import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value, onChange, Icon, ...extraProps}) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps}
      />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.div`

      background-color: ${theme.colors.white};
      border-radius: ${theme.borderRadius.round};
      display: flex;
      align-items: center;
      padding: 18px 24px;
      margin: 18px 0;

    .icon{
      font-size: ${theme.fonts.size.P0};
      margin-right: 8px;
      color: ${theme.colors.greySemiDark};
    }

    input {
      border: none;
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.dark};
      width: 100%;

    &::placeholder {
      background:  ${theme.colors.white};
      color:  ${theme.colors.greyMedium};
    }
  }
`
