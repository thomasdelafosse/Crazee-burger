import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import ToastAdmin from "./ToastAdmin";
import { toast } from "react-toastify";

export default function NavbarRightSide({ id }) {
  const [isChecked, setisChecked] = useState(false);

  const displayToastNotification = () => {
    if (!isChecked) {
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
    setisChecked(!isChecked);
  };

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onChange={displayToastNotification}
      />
      <Profile id={id} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
