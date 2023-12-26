import React, { useEffect, useMemo, useState } from 'react';

// Hooks
import { useProducts } from '../../hooks';

// Components
import {
  ProductList,
  Newsletter,
  Select,
  MoneyRangeSlider,
} from '../../components';

// Images
import ProductContentBanner from '../../assets/images/product-content-banner.jpg';

// Icons
import chevronRight from '../../assets/icons/chevron-right.svg';
import errorInfo from '../../assets/icons/error-info.png';

// Types
import { Range } from 'react-input-range';

const Home: React.FC = () => {
  const { products, productsError, categories } = useProducts();

  const [selectedCategorie, setSelectedCategorie] = useState<string>();
  const [selectedPriceRange, setSelectedPriceRange] = useState<Range>({
    min: 0,
    max: 100,
  });
  const [maxValue, setMaxValue] = useState(0);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        (!selectedCategorie || product.category === selectedCategorie) &&
        product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max
    );
  }, [products, selectedCategorie, selectedPriceRange]);

  const defineMaxPrice = () => {
    const items = selectedCategorie ? filteredProducts : products;
    const maxPrice = items.reduce(
      (result, item) => (item.price > result ? item.price : result),
      0
    );
    setMaxValue(maxPrice);
    setSelectedPriceRange({ min: 0, max: maxPrice });
  };

  // Should update max value very categorie changes
  useEffect(() => {
    defineMaxPrice();
  }, [selectedCategorie]);

  // Define the inital max value
  useEffect(() => {
    defineMaxPrice();
  }, [products]);

  return (
    <div>
      <div className='container'>
        <div className='relative mb-[6rem] py-[11.5rem]'>
          <div
            className='
          relative
          z-10
          flex flex-col
          items-center
          justify-center
          gap-[2.4rem]
          h-full w-full
          px-[2rem]
          sm:px-0
          text-center'
          >
            <div className='flex items-center'>
              <span className='font-medium text-black-600 text-sm'>Home</span>
              <img
                src={chevronRight}
                alt='Arrow right'
                className='ml-[0.4rem] mr-[1.6rem]'
              />
              <span className='font-medium text-black-600 text-sm'>Shop</span>
            </div>
            <div>
              <h1 className='font-poppins text-black font-medium text-7xl sm:text-8xl'>
                Catalog Page
              </h1>
            </div>
            <div>
              <p className='font-normal text-black-600 text-xl'>
                Let’s design the place you always imagined.
              </p>
            </div>
          </div>
          <img
            src={ProductContentBanner}
            alt='Product content banner'
            className='absolute z-0 w-full h-full top-0 object-cover md:object-fill'
          />
        </div>
        <div className='mb-[10rem]'>
          {productsError ? (
            <div className='text-center'>
              <img
                src={errorInfo}
                alt='Error infomation icon'
                className='m-auto w-[8rem] h-[8rem]'
              />
              <p className='text-6xl font-bold mb-[1rem] mt-[2rem]'>Oops!</p>
              <p className='text-2xl font-semibold	'>
                Something went wrong to list our products!
              </p>
            </div>
          ) : (
            <div>
              <div className='mb-[4rem] flex flex-col sm:flex-row gap-[2.4rem] px-[2rem] sm:px-0'>
                <Select
                  id='select-categories'
                  label='Categories'
                  items={[
                    {
                      label: 'All',
                      value: undefined,
                      selected: !Boolean(selectedCategorie),
                    },
                    ...categories.map((item) => ({
                      label: item[0].toUpperCase() + item.substring(1),
                      value: item,
                      selected: item === selectedCategorie,
                    })),
                  ]}
                  onSelectItem={setSelectedCategorie}
                />
                <MoneyRangeSlider
                  label='Price'
                  value={selectedPriceRange}
                  minValue={0}
                  maxValue={maxValue}
                  allowSameValues
                  formatLabel={(label) => `$${label.toFixed(2)}`}
                  onChange={(data) =>
                    setSelectedPriceRange({
                      min: (data as Range).min,
                      max: (data as Range).max,
                    })
                  }
                />
              </div>
              <ProductList products={filteredProducts} />
            </div>
          )}
        </div>
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
