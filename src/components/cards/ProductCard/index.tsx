import React from 'react';

// Components
import { Rating, Button } from '../../common';

// Types
import { ProducCardProps } from './ProductCard.types';

// Style
import './ProductCard.styles.css';

const ProductCard: React.FC<ProducCardProps> = ({ product, onAddToCart }) => (
  <div className='relative'>
    <div className='produc-card w-full h-[43.3rem]' tabIndex={0}>
      <div className='relative flex items-center justify-center h-[34.9rem] bg-gray-200'>
        <div className='w-3/4 h-3/4'>
          <img
            className='w-full h-full object-contain mix-blend-multiply'
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className='produc-card-add-to-cart hidden px-[1.6rem] absolute w-full bottom-0 pb-[1.6rem]'>
          <Button tabIndex={0} fill onClick={() => onAddToCart?.(product)}>
            Add to cart
          </Button>
        </div>
      </div>
      <div className='product-card-details pt-[1.2rem] px-[2rem] sm:px-0 bg-white'>
        <div>
          <Rating value={product.rating.rate} />
        </div>
        <div className='mt-[0.4rem]'>
          <p className='product-card-details-title text-base font-semibold truncate'>
            {product.title}
          </p>
          <p className='product-card-details-description text-base hidden'>
            {product.description}
          </p>
          <p className='text-sm font-semibold'>${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
