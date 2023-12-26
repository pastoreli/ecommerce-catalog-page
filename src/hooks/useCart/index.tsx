import {
  useState,
  useCallback,
  createContext,
  useEffect,
  useContext,
  useMemo,
} from 'react';

// Hooks
import { useProducts } from '../../hooks';

// Types
import { Cart, CartProduct, CartInformation } from '../../types/cart';
import {
  CartContextType,
  CartProviderType,
  localStorageCartKeys,
} from './useCart.types';

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartProducts: [],
  cartInformations: {
    subtotal: 0,
    total: 0,
  },
});

export const CartProvider = (
  props: React.PropsWithChildren<CartProviderType>
) => {
  const { products } = useProducts();

  const [cartItems, setCartItems] = useState<Cart[]>([]);

  const getCartItems = useCallback(async () => {
    const cartItems = localStorage.getItem(localStorageCartKeys.CART_ITEMS);
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const cartProducts = useMemo(() => {
    return cartItems.reduce((result: CartProduct[], cartItem) => {
      const product = products.find(
        (product) => product.id === cartItem.productId
      );
      if (product) {
        result.push({ ...cartItem, product });
      }

      return result;
    }, []);
  }, [cartItems, products]);

  const cartInformations = useMemo(() => {
    return cartProducts.reduce(
      (result: CartInformation, product) => {
        const value = product.quantity * product.product.price;
        result.subtotal += value;
        result.total += value;
        return result;
      },
      { subtotal: 0, total: 0 }
    );
  }, [cartProducts]);

  const updateStorage = (items: Cart[]) => {
    localStorage.setItem(
      localStorageCartKeys.CART_ITEMS,
      JSON.stringify(items)
    );
  };

  const increaseToCart = (productId: number) => {
    const product = cartItems.find((item) => item.productId === productId);
    let items = cartItems;
    if (product) {
      product.quantity++;
      items = items.map((item) => {
        if (item.productId === product.productId) {
          return product;
        }
        return item;
      });
    } else {
      items.push({ productId, quantity: 1 });
    }

    setCartItems([...items]);
    updateStorage(items);
  };

  const decreaseToCart = (productId: number) => {
    const product = cartItems.find((item) => item.productId === productId);
    let items = cartItems;
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;

        items = items.map((item) => {
          if (item.productId === product.productId) {
            return product;
          }
          return item;
        });
      } else {
        items = items.filter((item) => item.productId !== productId);
      }
      setCartItems([...items]);
      updateStorage(items);
    }
  };

  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  const context: CartContextType = {
    cartItems,
    cartProducts,
    cartInformations,
    increaseToCart,
    decreaseToCart,
  };

  return <CartContext.Provider value={context} {...props} />;
};

export const useCart = () => useContext(CartContext);
