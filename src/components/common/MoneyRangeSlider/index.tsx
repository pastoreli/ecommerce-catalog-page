import React from 'react';
import InputRange, { Range } from 'react-input-range';

// Types
import { RangeSliderProps } from './RangeSlider.types';

// Styles
import 'react-input-range/lib/css/index.css';
import './RangeSlider.styles.css';

const MoneyRangeSlider: React.FC<RangeSliderProps> = ({
  value,
  label,
  minValue,
  maxValue,
  ...props
}) => (
  <div>
    {label && (
      <label className='text-base text-grey-600 font-semibold'>
        {label.toUpperCase()} | ${minValue?.toFixed(2)} - $
        {maxValue?.toFixed(2)}
      </label>
    )}
    <div
      className='
        relative
        flex
        items-center
        py-[0.8rem]
        px-[2rem]
        bg-white
        border-[0.2rem]
        boder-grey-600
        rounded-[0.8rem]
        w-[25.4rem]
        max-w-full
        h-[4.8rem]
        mt-[0.8rem]'
    >
      <InputRange
        value={value}
        minValue={minValue}
        maxValue={maxValue}
        {...props}
      />
    </div>
    {typeof value === 'object' ? (
      <p className='text-sm text-grey-600'>
        ${(value as Range).min.toFixed(2)} - ${(value as Range).max.toFixed(2)}
      </p>
    ) : (
      <p>{(value as number)?.toFixed(2)}</p>
    )}
  </div>
);

export default MoneyRangeSlider;
