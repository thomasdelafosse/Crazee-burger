import styled from "styled-components";
import Profile from "./profile";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useOrderContext } from "../../../../context/OrderContext";

export default function NavbarRightSide() {
  const { isModeAdmin, setIsModeAdmin } = useOrderContext();

  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsModeAdmin(!isModeAdmin);
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onChange={displayToastNotification}
      />
      <Profile />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
