
// Types
import { Cart, CartProduct, CartInformation} from "../../types/cart";

export type CartContextType = {
  cartItems: Cart[];
  cartProducts: CartProduct[];
  cartInformations: CartInformation;
  increaseToCart?: (productId: number) => void;
  decreaseToCart?: (productId: number) => void;
}

export type CartProviderType = {
    value?: CartContextType;
};

export enum localStorageCartKeys {
  CART_ITEMS = 'cartItems'
}
