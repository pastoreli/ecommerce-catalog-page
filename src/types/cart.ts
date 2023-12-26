// Types
import { Product } from './product';

export type Cart = {
  productId: number;
  quantity: number;
}

export type CartProduct = Cart & {
  product: Product;
}

export type CartInformation = {
  subtotal: number;
  total: number;
}
