import React from 'react';

// Icons
import minus from '../../../assets/icons/minus.svg';
import plus from '../../../assets/icons/plus.svg';

// Types
import { IncreaserProps } from './Increaser.types';

const Increaser: React.FC<IncreaserProps> = ({ value, onChange }) => (
  <div className='w-[8rem] h-[3.2rem] flex items-stretch gap-[1.2rem] border boder-grey-600 rounded-[0.4rem] overflow-hidden'>
    <button className=' flex-1' onClick={() => onChange(value - 1)}>
      <img className='m-auto' src={minus} alt='Decrease icons' />
    </button>
    <div className='flex items-center justify-center'>
      <span className='text-ssm'>{value}</span>
    </div>
    <button className='flex-1' onClick={() => onChange(value + 1)}>
      <img className='m-auto' src={plus} alt='Increase icon' />
    </button>
  </div>
);

export default Increaser;
