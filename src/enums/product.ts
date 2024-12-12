import { MenuProduct } from "../types/product";

export const EMPTY_PRODUCT: MenuProduct = Object.freeze({
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isPublicised: false,
});

export const IMAGE_COMING_SOON: string = "/images/coming-soon.png";

export const BASKET_MESSAGE: { EMPTY: string; LOADING: string } = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
};
