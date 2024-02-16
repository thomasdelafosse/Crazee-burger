import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { theme } from "../../../../theme";

export default function Admin() {
  const [addProductText, setAddProductText] = useState("Ajouter un produit"); // nouvelle priorité d'état pour afficher le texte
  const [isReduced, setIsReduced] = useState(false); // afficher le pannel admin (reduce )
  const [isAddProductClicked, setIsAddProductClicked] = useState(true); // afficher les produits "ajouter"
  const [isModifyProductClicked, setIsModifyProductClicked] = useState(false); // afficher les produits "modifier"

  const handleAddProductClick = () => {
    const newText = "Ajouter un produit"; // Texte qu'on souhaite afficher
    setAddProductText(newText); // change l'état du state avec la valeur passé
    setIsAddProductClicked(true); // sélectionne l'état du bouton "ajouter un produit"
    setIsModifyProductClicked(false); // Réinitialise l'état du bouton "Modifier un produit"
    setIsReduced(false); // Ouvre le panneau admin lorsque le bouton "Ajouter un produit" est cliqué
  };

  const handleModifyProductClick = () => {
    const newText = "Modifier un produit"; // Texte qu'on souhaite afficher
    setAddProductText(newText); // change l'état du state avec la valeur passé
    setIsModifyProductClicked(true); // sélectionne l'état du bouton "modifier un produit"
    setIsAddProductClicked(false); // Réinitialise l'état du bouton "Ajouter un produit"
    setIsReduced(false); // Ouvre le panneau admin lorsque le bouton "Modifier un produit" est cliqué
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
          className={`add-product ${isAddProductClicked ? "active" : ""}`}
          onClick={handleAddProductClick}
        >
          <AiOutlinePlus className="plus-logo" />
          Ajouter un produit
        </button>
        <button
          className={`modify-product ${isModifyProductClicked ? "active" : ""}`}
          onClick={handleModifyProductClick}
        >
          <MdModeEditOutline className="modifier-logo" />
          Modifier un produit
        </button>
      </div>
      <div className={`info-admin ${isReduced ? "hidden" : "visible"}`}>
        {addProductText}
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
