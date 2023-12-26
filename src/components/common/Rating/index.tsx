import React from 'react';

// Icons
import star from '../../../assets/icons/star.svg';

// Types
import { RatingProps } from './Rating.types';

const Rating: React.FC<RatingProps> = ({ value }) => (
  <div className='flex gap-[0.2rem]'>
    {Array(Math.round(value))
      .fill('')
      .map((_, index) => (
        <img key={`star-${index}`} src={star} alt='star icon' />
      ))}
  </div>
);

export default Rating;
