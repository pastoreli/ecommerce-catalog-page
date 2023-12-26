import React from 'react';

// Components
import { ProductCard } from '../../cards';

// Hooks
import { useCart, useToast } from '../../../hooks';

// Types
import { ProductListProps } from './ProducList.types';
import { Product } from '../../../types/product';
import { toastTypes } from '../../../components/common/Toast/Toast.types';

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { increaseToCart } = useCart();
  const { showToast } = useToast();

  const handleIncreaseProduct = (productData: Product) => {
    increaseToCart?.(productData.id);
    showToast?.({
      text: 'Product added to cart',
      type: toastTypes.SUCCESS,
    });
  };

  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4	gap-[2.4rem]'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleIncreaseProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
