
// Types
import { Product } from "../../types/product";

export type ProductsContextType = {
  products: Product[];
  loadingProducts?: boolean;
  productsError?: ErrorConstructor;
  categories: string[];
  loadingCategories?: boolean;
  categoriesError?: ErrorConstructor;
}

export type ProductsProviderType = {
    value?: ProductsContextType;
};
