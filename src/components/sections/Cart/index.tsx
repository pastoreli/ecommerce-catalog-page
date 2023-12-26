import React from 'react';

// Components
import { Increaser, LinkButton } from '../../common';

// Hooks
import { useCart } from '../../../hooks';

// Types
import { CartProduct } from '../../../types/cart';

// Styles
import './Cart.styles.css';

const Cart: React.FC = () => {
  const { cartProducts, cartInformations, decreaseToCart, increaseToCart } =
    useCart();

  const handleProductUpdate = (productCart: CartProduct, quantity: number) => {
    if (quantity > productCart.quantity) {
      increaseToCart?.(productCart.productId);
    } else {
      decreaseToCart?.(productCart.productId);
    }
  };

  if (!cartProducts.length) {
    return (
      <div className='py-[3rem] text-center'>
        <p className='text-3xl font-medium'>Your bag is empty</p>
      </div>
    );
  }

  return (
    <div>
      <p className='text-3xl font-medium'>Your bag</p>
      {cartProducts.map((cartProduct) => (
        <div
          key={cartProduct.productId}
          className='mt-[1.6rem] py-[2.4rem] border-b boder-grey-600'
        >
          <div className='flex gap-[1.6rem]'>
            <div className='w-[8rem] h-[9.6rem]'>
              <img
                className='w-full h-full object-contain mix-blend-multiply'
                src={cartProduct.product.image}
                alt={cartProduct.product.title}
              />
            </div>
            <div className='flex-1'>
              <div className='flex justify-between'>
                <div className='cart-title h-[5rem] pr-[1rem]'>
                  <p className='text-sm font-semibold'>
                    {cartProduct.product.title}
                  </p>
                </div>
                <p className='text-sm font-semibold'>
                  ${cartProduct.product.price.toFixed(2)}
                </p>
              </div>
              <div className='mt-[0.8rem]'>
                <Increaser
                  value={cartProduct.quantity}
                  onChange={(value) => handleProductUpdate(cartProduct, value)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div>
        <div className='flex justify-between border-b boder-grey-600 py-[1.3rem] mt-[1.6rem]'>
          <p className='text-base'>Subtotal</p>
          <p className='text-base font-semibold'>
            ${cartInformations.subtotal.toFixed(2)}
          </p>
        </div>
        <div className='flex justify-between py-[1.3rem]'>
          <p className='text-xl font-medium	'>Total</p>
          <p className='text-xl font-medium	'>
            ${cartInformations.total.toFixed(2)}
          </p>
        </div>
        <LinkButton href='/' fill className='my-[1.6rem]'>
          Go to checkout
        </LinkButton>
      </div>
    </div>
  );
};

export default Cart;
