import React from 'react';

// Types
import { TextButtonProps } from './TextButton.types';

const TextButton: React.FC<TextButtonProps> = ({
  color = 'text-gray-500',
  className,
  children,
  ...props
}) => (
  <button
    className={`bg-transparent text-base font-medium ${color} ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default TextButton;
