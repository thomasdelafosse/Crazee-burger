import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import ProfileStyled from "./profile";
import { theme } from "../../../../theme";
import ToggleButton from "./ToggleButton";

export default function NavBarRightSide({ id }) {
  return (
    <NavBarRightSideStyled>
      <ToggleButton />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <ProfileStyled id={id} />
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
