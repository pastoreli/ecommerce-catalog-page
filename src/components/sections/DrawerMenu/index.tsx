import React, { useEffect, useState } from 'react';

// Icons
import close from '../../../assets/icons/close.png';

// Types
import { DrawerMenuProps } from './DrawerMenu.types';

// Styles
import './DrawerMenu.styles.css';

const DrawerMenu: React.FC<DrawerMenuProps> = ({
  id,
  show,
  children,
  onClose,
}) => {
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowDrawer(show), show ? 0 : 500);
  }, [show]);

  return (
    <div
      id={id}
      className={`${
        showDrawer ? 'visible' : 'invisible'
      } fixed h-screen w-full top-0 left-0 z-50`}
    >
      <div
        role='button'
        className='absolute w-full h-full bg-[rgba(0,0,0,0.4)] left-0 top-0 z-0'
        onClick={onClose}
      />
      <div
        className={`
        drawer-container
        ${
          show ? 'drawer-container--show' : ''
        } relative w-[30rem] max-w-full h-full bg-white border border-grey-50 z-10 p-[2rem]`}
      >
        <div className='text-right '>
          <button className='bg-transparent' onClick={onClose}>
            <img
              src={close}
              alt='Close drawer menu'
              className='w-[1.5rem] h-[1.5rem]'
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default DrawerMenu;
