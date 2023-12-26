import React, { useState } from 'react';

// Types
import { InputTextProps } from './InputText.types';

const InputText: React.FC<InputTextProps> = ({
  className,
  append,
  preppend,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <div
      className={`flex gap-[0.8rem] border-b box-border py-[1rem] ${className} ${
        isFocused ? 'border-primary' : 'border-gray-400'
      }`}
    >
      {preppend}
      <input
        className='flex-1 text-base bg-transparent outline-none placeholder:text-gray-500'
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {append}
    </div>
  );
};

export default InputText;
