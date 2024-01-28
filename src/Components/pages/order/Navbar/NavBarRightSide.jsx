import styled from "styled-components";
import ProfileStyled from "./profile";
import ToggleButtonStyled from "./ToggleButton";
import { theme } from "../../../../theme";
import { ToastContainer } from "react-toastify";

export default function NavBarRightSide({ id }) {
  return (
    <NavBarRightSideStyled>
      <ToggleButtonStyled />
      <ProfileStyled id={id} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </NavBarRightSideStyled>
  );
}

const NavBarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
