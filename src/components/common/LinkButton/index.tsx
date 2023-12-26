import React from 'react';

// Types
import { LinkButtonProps } from './LinkButton.types';

const LinkButton: React.FC<LinkButtonProps> = ({
  bg = 'bg-primary',
  fill = false,
  className,
  children,
  ...props
}) => (
  <a
    className={`
    ${bg}
    ${fill ? 'w-full' : ''}
    inline-block
    text-center
    text-grey-100
    text-base
    font-medium
    px-[2.4rem]
    py-[0.8rem]
    rounded-[0.8rem]
    ${className}`}
    {...props}
  >
    {children}
  </a>
);

export default LinkButton;
