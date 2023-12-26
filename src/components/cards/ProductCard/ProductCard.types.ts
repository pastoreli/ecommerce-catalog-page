import { Product } from "../../../types/product"

export type ProducCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
}
