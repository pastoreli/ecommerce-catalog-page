import { customFetch } from './config/fetchSetup';
import { API_URL } from './config/consts';

// Types
import { Product } from '../types/product';

const getProducts = (): Promise<Product[]> =>
  customFetch(`${API_URL.MAIN_API}/products`);

const getCategories = (): Promise<string[]> =>
  customFetch(`${API_URL.MAIN_API}/products/categories`)

const requests = {
  getProducts,
  getCategories,
}

export default requests;
