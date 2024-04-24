import { useRef, useState } from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import NavBar from "./Navbar/NavBar";
import OrderContext from "../../../context/OrderContext";
import Main from "./Main/Main";
import { fakeMenu } from "../../fakeData/fakeMenu.jsx";
import { EMPTY_PRODUCT } from "./Admin/AdminPanel/AddForm.jsx";
import UserContext from "../../../context/UserContext.jsx";

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");
  const [menu, setMenu] = useState(fakeMenu.MEDIUM);
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);
  const inputBaliseRef = useRef();

  const handleAdd = (newProduct) => {
    const menuCopy = [...menu];
    const menuCopyUpdated = [newProduct, ...menuCopy];
    setMenu(menuCopyUpdated);
  };

  const handleDelete = (idProduct) => {
    const menuCopy = [...menu];

    const menuCopyUpdated = menuCopy.filter(
      (product) => product.id !== idProduct,
    );
    setMenu(menuCopyUpdated);
  };

  const resetMenu = () => {
    setMenu(fakeMenu.MEDIUM);
  };

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    inputBaliseRef,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <NavBar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
