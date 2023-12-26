import React from 'react';

// Types
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
  bg = 'bg-primary',
  fill = false,
  className,
  children,
  ...props
}) => (
  <button
    className={`${bg} ${
      fill ? 'w-full' : ''
    } text-grey-100 text-base font-medium px-[2.4rem] py-[0.8rem] rounded-[0.8rem] ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
