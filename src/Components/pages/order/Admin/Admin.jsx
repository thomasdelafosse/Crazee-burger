import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";

export default function Admin() {
  return (
    <AdminStyled>
      <div className="all-buton">
        <button className="reduire">
          <FiChevronDown className="reduire-logo" />
        </button>
        <button className="add-product">
          <AiOutlinePlus className="plus-logo" />
          Ajouter un produit
        </button>
        <button className="modify-product">
          <MdModeEditOutline className="modifier-logo" />
          Modifier un produit
        </button>
      </div>
      <div className="info-admin">INFO ADMIN PANNEL</div>
    </AdminStyled>
  );
}

const AdminStyled = styled.div`
  /* border: 1px solid red; */
  /* flex: 1; */
  /* width: 1400px;
  height: 294.5px; */

  .all-buton {
    /* width: 1400px; */
    /* border: 1px solid green; */
    height: 44px;
    padding-left: 71px;
  }
  .reduire {
    width: 60px;
    height: 43px;
    top: 1px;
    left: 71px;
    padding: 13px, 0px, 14px, 0px;
    border-radius: 5px, 5px, 0px, 0px;
    border: 1px, 1px, 2px, 1px;
  }
  .reduire-logo {
  }

  .add-product {
    width: 212.02px;
    height: 43px;
    top: 1px;
    left: 132px;
    padding: 10px, 22px, 11px, 22px;
    border-radius: 5px, 5px, 0px, 0px;
    border: 1px, 1px, 2px, 1px;
    gap: 13.02px;
  }
  .plus-logo {
    width: 16px;
    height: 16px;
    top: 13px;
    left: 22px;
  }
  .modify-product {
    width: Hug (219.98px);
    height: Hug (43px);
    top: 1px;
    left: 344.84px;
    padding: 10px, 22px, 11px, 22px;
    border-radius: 5px, 5px, 0px, 0px;
    border: 1px, 1px, 2px, 1px;
    gap: 12.98px;
  }
  .modifier-logo {
  }

  .info-admin {
    /* width: 1400px; */
    border: 1px solid blue;
    height: 250px;
    top: 43.83px;
    padding: 17px, 1239.98px, 211px, 21.02px;
    /* border: 1px; */
  }
`;
