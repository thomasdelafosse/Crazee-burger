import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { theme } from "../../../../theme";

export default function Admin() {
  const [addText, setAddText] = useState("Ajouter un produit");
  const [isReduced, setIsReduced] = useState(false);
  const [addProductPanel, setAddProductPanel] = useState(true);
  const [modifyProductPanel, setModifyProductPanel] = useState(false);

  const handleAddProduct = () => {
    const newText = "Ajouter un produit";
    setAddText(newText);
    setAddProductPanel(true);
    setModifyProductPanel(false);
    setIsReduced(false);
  };

  const handleModifyProduct = () => {
    const newText = "Modifier un produit";
    setAddText(newText);
    setModifyProductPanel(true);
    setAddProductPanel(false);
    setIsReduced(false);
  };

  const handleUpDown = () => {
    setIsReduced(!isReduced);
  };

  return (
    <AdminStyled>
      <div className="all-buton">
        <button
          className={`reduire ${isReduced ? "inactive" : ""}`}
          onClick={handleUpDown}
        >
          {isReduced ? (
            <FiChevronUp className="reduire-logo" />
          ) : (
            <FiChevronDown className="reduire-logo" />
          )}
        </button>
        <button
          className={`add-product ${addProductPanel ? "active" : ""}`}
          onClick={handleAddProduct}
        >
          <AiOutlinePlus className="plus-logo" />
          Ajouter un produit
        </button>
        <button
          className={`modify-product ${modifyProductPanel ? "active" : ""}`}
          onClick={handleModifyProduct}
        >
          <MdModeEditOutline className="modifier-logo" />
          Modifier un produit
        </button>
      </div>
      <div className={`info-admin ${isReduced ? "hidden" : "visible"}`}>
        {addText}
      </div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  .all-buton {
    height: 44px;
    padding-left: 71px;
  }
  .reduire {
    /* width: 60px;
    height: 43px;
    top: 1px;
    left: 71px;
    padding: 13px, 0px, 14px, 0px;
    border-radius: 5px, 5px, 0px, 0px;
    border: 1px, 1px, 2px, 1px; */
  }

  .add-product {
    /* width: 212.02px;
    height: 43px;
    top: 1px;
    left: 132px;
    padding: 10px, 22px, 11px, 22px;
    border-radius: 5px, 5px, 0px, 0px;
    border: 1px, 1px, 2px, 1px;
    gap: 13.02px; */
    color: ${theme.colors.greyDark};
    &.active {
      background-color: black;
      color: #fff;
    }
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greyDark};
    }
  }

  .modify-product {
    /* width: Hug (219.98px);
    height: Hug (43px);
    top: 1px;
    left: 344.84px;
    padding: 10px, 22px, 11px, 22px;
    border-radius: 5px, 5px, 0px, 0px;
    border: 1px, 1px, 2px, 1px;
    gap: 12.98px; */
    color: ${theme.colors.greyDark};

    &.active {
      background-color: black;
      color: #fff;
    }

    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greyDark};
    }
  }

  .info-admin {
    height: 240px;

    &.hidden {
      display: none;
    }
  }
`;
