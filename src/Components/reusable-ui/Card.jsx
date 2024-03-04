import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";

export default function Card({ title, imageSource, leftDescription }) {
  return (
    <CardStyled className="produit">
      <button className="delete-button" aria-label="delete-button">
        <TiDelete className="icon" />
      </button>
      <div className="image">
        <img src={imageSource} alt={title} />
      </div>
      <div className="text-info">
        <div className="title">{title}</div>
        <div className="description">
          <div className="left-description">{leftDescription}</div>
          <div className="right-description">
            <PrimaryButton className="primary-button" label={"Ajouter"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
  position: relative;

  .delete-button {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${theme.colors.primary};
    padding: 0;
    border: none;
    background: none;
  }

  .icon {
    /* border: 1px solid blue; */
    height: 100%;
    width: 100%;
  }

  .image {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .text-info {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .left-description {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .right-description {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;

// export default function Card({ image, title }) {
//   // Trouver l'élément correspondant dans fakeMenu2 en fonction du titre
//   const menuItem = fakeMenu2.find((item) => item.title === title);

//   // Vérifier si l'élément a été trouvé avant d'accéder à son prix
//   const priceReduce = menuItem ? formatPrice(menuItem.price) : "";

//   return (
//     <CardStyled>
//       <ImgStyled src={image} alt="image" />
//       <InfoCardStyled className="InfoCard">
//         <TitleStyled>{title}</TitleStyled>
//         <PriceButtonStyled>
//           {PriceReduce}
//           <PrimaryButton
//             label={"Ajouter"}
//             className={"bouton-ajouter-panier"}
//           />
//         </PriceButtonStyled>
//       </InfoCardStyled>
//     </CardStyled>
//   );
// }

// const ImgStyled = styled.img`
//   width: 200px;
//   height: 145px;
//   object-fit: contain;
//   margin-top: 50px;
//   margin-left: 20px;
//   margin-right: 20px;
// `;

// const CardStyled = styled.div`
//   width: 240px;
//   height: 330px;
//   background: ${theme.colors.white};
//   border-radius: 15px 15px 15px 15px;
//   box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
// `;

// const InfoCardStyled = styled.div`
//   width: 200px;
//   height: 110px;
//   margin-bottom: 10px;
//   margin-left: 20px;
//   margin-right: 20px;
//   padding: 0px 5px 5px 5px;
// `;

// const TitleStyled = styled.div`
//   width: 185.57px;
//   height: 46px;
//   font-family: "Amatic SC", sans-serif;
//   font-weight: ${theme.fonts.weights.bold};
//   font-size: ${theme.fonts.size.P4};
//   line-height: 45.4px;
//   white-space: none;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const PriceButtonStyled = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: ${theme.colors.primary};
//   line-height: 22px;
//   size: 16px;
//   margin-top: 10px;
//   font-family: "Open-Sans", sans-serif;
//   font-weight: ${theme.fonts.weights.regular};

//   .bouton-ajouter-panier {
//     width: 95px;
//     height: 38px;
//     border: 1px;
//     border-radius: 5px;
//     font-weight: ${theme.fonts.weights.bold};
//     size: 11px;
//     line-height: 12px;
//     align-items: center;
//   }
// `;
