import React from 'react';

// Types
import { ToastProps, toastTypes } from './Toast.types';

// Icons
import danger from '../../../assets/icons/danger.png';
import checked from '../../../assets/icons/checked.png';
import warning from '../../../assets/icons/warning.png';

const Toast: React.FC<ToastProps> = ({ text, type }) => {
  const currentTheme = theme[type];

  return (
    <div
      className={`rounded-[0.8rem] ${currentTheme.bg} border-[0.15rem] ${currentTheme.border} py-[1rem] px-[2rem] flex items-center`}
    >
      <div>
        <img
          src={currentTheme.icon}
          alt='Toast infomative icon'
          className='w-[1.5rem] h-[1.5rem] mr-[1rem]'
        />
      </div>
      <div className='flex-1'>
        <p className={`${currentTheme.text} text-base font-semibold	`}>{text}</p>
      </div>
    </div>
  );
};

export default Toast;

const theme = {
  [toastTypes.DANGER]: {
    bg: 'bg-danger-100',
    text: 'text-danger-600',
    border: 'border-danger-300',
    icon: danger,
  },
  [toastTypes.SUCCESS]: {
    bg: 'bg-success-100',
    text: 'text-success-600',
    border: 'border-success-300',
    icon: checked,
  },
  [toastTypes.WARNING]: {
    bg: 'bg-warning-100',
    text: 'text-warning-600',
    border: 'border-warning-300',
    icon: warning,
  },
};
