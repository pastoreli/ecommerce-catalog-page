import {
  useState,
  useCallback,
  createContext,
  useEffect,
  useContext,
} from 'react';

// Services
import { ProductService } from '../../services';

// Types
import { Product } from '../../types/product';
import { ProductsContextType, ProductsProviderType } from './useProducts.types';

export const ProductsContext = createContext<ProductsContextType>({
  products: [],
  categories: [],
});

export const ProductsProvider = (
  props: React.PropsWithChildren<ProductsProviderType>
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [productsError, setProductsError] = useState<ErrorConstructor>();
  const [categories, setCategories] = useState<string[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [categoriesError, setCategoriesError] = useState<ErrorConstructor>();

  const getProduct = useCallback(async () => {
    setLoadingProducts(true);
    await ProductService.getProducts()
      .then((result) => {
        setProducts(result);
        setProductsError(undefined);
      })
      .catch(setProductsError);
    setLoadingProducts(false);
  }, []);

  const getCategories = useCallback(async () => {
    setLoadingCategories(true);
    await ProductService.getCategories()
      .then((result) => {
        setCategories(result);
        setCategoriesError(undefined);
      })
      .catch(setCategoriesError);
    setLoadingCategories(false);
  }, []);

  useEffect(() => {
    getProduct();
    getCategories();
  }, [getCategories, getProduct]);

  const context: ProductsContextType = {
    products,
    loadingProducts,
    productsError,
    categories,
    loadingCategories,
    categoriesError,
  };

  return <ProductsContext.Provider value={context} {...props} />;
};

export const useProducts = () => useContext(ProductsContext);
