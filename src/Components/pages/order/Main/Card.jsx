import styled from "styled-components";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";
import { formatPrice } from "/src/Components/utils/maths";

export default function Card({ image, title }) {
  // Trouver l'élément correspondant dans fakeMenu2 en fonction du titre
  const menuItem = fakeMenu2.find((item) => item.title === title);

  // Vérifier si l'élément a été trouvé avant d'accéder à son prix
  const priceReduce = menuItem ? formatPrice(menuItem.price) : "";

  return (
    <CardStyled>
      <ImgStyled src={image} alt="image" />
      <InfoCardStyled className="InfoCard">
        <TitleStyled>{title}</TitleStyled>
        <PriceButtonStyled>
          {priceReduce}
          <PrimaryButton
            label={"Ajouter"}
            className={"bouton-ajouter-panier"}
          />
        </PriceButtonStyled>
      </InfoCardStyled>
    </CardStyled>
  );
}

const ImgStyled = styled.img`
  width: 200px;
  height: 145px;
  object-fit: contain;
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;
`;

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  background: #ffffff;
  border-radius: 15px 15px 15px 15px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
`;

const InfoCardStyled = styled.div`
  width: 200px;
  height: 110px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  padding: 0px 5px 5px 5px;
`;

const TitleStyled = styled.div`
  width: 185.57px;
  height: 46px;
  font-family: "Amatic SC", sans-serif;
  font-weight: 700;
  font-size: 36px;
  line-height: 45.4px;
`;

const PriceButtonStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffa01b;
  font-weight: 400;
  line-height: 22px;
  size: 16px;
  font-family: "Open-Sans", sans-serif;
  margin-top: 10px;

  .bouton-ajouter-panier {
    width: 95px;
    height: 38px;
    border: 1px;
    font-weight: 700;
    size: 11px;
    line-height: 12px;
    align-items: center;
    border-radius: 5px;
  }
`;
