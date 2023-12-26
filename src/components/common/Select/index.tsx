import React, { useMemo, useState } from 'react';

// Icons
import arrowDown from '../../../assets/icons/arrow-down.svg';

// Types
import { SelectProps } from './Select.types';

const Select: React.FC<SelectProps> = ({
  id,
  label,
  items,
  onSelectItem,
  onKeyDown,
  onClick,
  onBlur,
  ...props
}) => {
  const [showList, setShowList] = useState(false);

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowList((value) => !value);
    onClick?.(e);
  };

  const handleOnBlur = (e: React.FocusEvent<HTMLDivElement, Element>) => {
    const currentTarget = e.currentTarget;
    setTimeout(() => {
      if (!currentTarget?.contains(document?.activeElement)) {
        setShowList(false);
        onBlur?.(e);
      }
    }, 100);
  };

  const handleKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setShowList((value) => !value);
    } else if (e.key === 'Escape') {
      setShowList(false);
    }
  };

  const selected = useMemo(() => items?.find((item) => item.selected), [items]);

  return (
    <div>
      {label && (
        <label className='text-base text-grey-600 font-semibold'>
          {label.toUpperCase()}
        </label>
      )}
      <div
        id={id}
        role='button'
        tabIndex={0}
        aria-expanded={showList}
        aria-controls={`${id}-items`}
        className='
        relative
        z-40
        flex
        items-center
        justify-between
        p-[0.8rem]
        bg-white
        border-[0.2rem]
        boder-grey-600
        rounded-[0.8rem]
        w-[25.4rem]
        max-w-full
        h-[4.8rem]
        mt-[0.8rem]'
        onClick={handleOnClick}
        onBlur={handleOnBlur}
        onKeyDown={handleKeyboard}
        {...props}
      >
        <div className='flex-1'>
          <p className='font-semibold	text-base'>{selected?.label}</p>
        </div>
        <div className={showList ? 'rotate-180' : ''}>
          <img src={arrowDown} alt='Arrow down' />
        </div>
        {showList && (
          <div
            id={`${id}-items`}
            className='
        absolute
        w-[25.4rem]
        max-w-full
        max-h-[50rem]
        z-40
        border-[0.2rem]
        boder-grey-600
        rounded-[0.8rem]
        bg-white
        top-[4.8rem]
        left-0'
          >
            <ul>
              {items?.map((item) => (
                <li key={item.value} className='border-b boder-grey-600'>
                  <button
                    className='w-full text-left bg-transparent text-base p-[1rem]'
                    onClick={() => onSelectItem?.(item.value)}
                    onKeyDown={(e) =>
                      e.key === 'Enter' && onSelectItem?.(item.value)
                    }
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
