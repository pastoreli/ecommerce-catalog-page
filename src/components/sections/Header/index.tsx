import React, { useEffect, useState } from 'react';

// Components
import { Cart, DrawerMenu } from '..';

// Hooks
import { useCart, useKeyboard } from '../../../hooks';

// Icons
import shoppingBag from '../../../assets/icons/shopping-bag.svg';
import menu from '../../../assets/icons/menu.png';

// Static
import { navigationLink } from '../../../static/links';

const Header: React.FC = () => {
  const { cartItems } = useCart();
  const { setKeyboardEvent } = useKeyboard();

  const [showMenu, setShowMenu] = useState(false);
  const [showBag, setShowBag] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showBag ? 'hidden' : 'auto';
  }, [showBag]);

  const handleOpenMenu = (open: boolean) => {
    setShowBag(false);
    setShowMenu(open);
  };

  const handleOpenBag = (open: boolean) => {
    setShowMenu(false);
    setShowBag(open);
  };

  useEffect(() => {
    setKeyboardEvent((event) => {
      if (event?.key === 'Escape') {
        setShowMenu(false);
        setShowBag(false);
      }
    });
  }, [setKeyboardEvent]);

  return (
    <div className='container py-[1.6rem] px-[2rem] sm:px-0'>
      <div className='h-[2.8rem] flex items-center justify-between md:justify-normal'>
        <div className='hidden md:block flex-1 text-center'>
          {navigationLink.map((item, index) => (
            <a
              key={item.label}
              href={item.link}
              className={`${index > 0 ? 'ml-16' : ''}
              ${item.active ? 'text-primary' : 'text-grey-700'}
              font-grotesk text-sm font-medium`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className='block md:hidden'>
          <button
            aria-expanded={showMenu}
            aria-controls='header-menu-drawer'
            onClick={() => handleOpenMenu(true)}
          >
            <img src={menu} alt='Menu button' className='w-[2rem] h-[2rem]' />
          </button>
        </div>
        <DrawerMenu
          id='header-menu-drawer'
          show={showMenu}
          onClose={() => handleOpenMenu(false)}
        >
          <div className='mt-[4rem]'>
            {navigationLink.map((item, index) => (
              <a
                key={item.label}
                href={item.link}
                className={`${
                  item.active ? 'text-primary' : 'text-grey-700'
                } font-grotesk text-xl text-grey-700 block mb-[1.5rem] font-medium`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </DrawerMenu>
        <div className='relative'>
          <div className='flex gap-[0.5rem] items-center'>
            <button
              className='bg-transparent'
              aria-expanded={showBag}
              aria-controls='bag-container'
              onClick={() => handleOpenBag(!showBag)}
            >
              <img src={shoppingBag} alt='Shopping bag' />
            </button>
            {Boolean(cartItems.length) && (
              <div className='bg-primary text-ssm text-grey-100 rounded-full w-[2rem] h-[2rem] flex items-center justify-center'>
                {cartItems.reduce((result, item) => result + item.quantity, 0)}
              </div>
            )}
          </div>
          <div
            id='bag-container'
            className={`
            ${
              showBag ? 'block' : 'hidden'
            } fixed z-40 w-full h-screen left-0 md:pb-[7rem]`}
          >
            <div
              className='absolute w-full h-full'
              role='button'
              onClick={() => handleOpenBag(false)}
            />
            <div
              className='
              relative
              md:w-[37.4rem]
              w-full
              md:h-auto
              h-screen
              px-[2.4rem]
              py-[1.6rem]
              bg-white
              md:border
              border-grey-50
              rounded-[0.6rem]
              xl:mr-[4rem]
              mr-[1rem]
              ml-auto
              mt-3
              md:pb-0
              pb-[6rem]
              z-10
              max-h-full
              overflow-y-auto'
            >
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
