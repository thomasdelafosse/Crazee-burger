import { MenuProduct } from "../types/product";

export const EMPTY_PRODUCT: MenuProduct = {
  id: "",
  title: "",
  imageSource: "",
  price: 0,
  isAvailable: true,
  isPublicised: false,
};

export const IMAGE_COMING_SOON = "/images/coming-soon.png";

export const BASKET_MESSAGE = {
  EMPTY: "Votre commande est vide.",
  LOADING: "Chargement en cours...",
} as const;