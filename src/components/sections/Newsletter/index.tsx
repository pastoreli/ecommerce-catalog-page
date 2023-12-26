import React from 'react';

// Components
import { InputText, TextButton } from '../../common';

// Images
import newsletterSection from '../../../assets/images/newsletter-section.jpg';

// Icons
import letter from '../../../assets/icons/letter.svg';

const Newsletter: React.FC = () => (
  <div className='relative py-[5rem] sm:pt-[10.1rem] sm:pb-[9.3rem]'>
    <div className='relative z-10 w-full h-full px-[2rem] sm:px-0'>
      <div className='container h-full flex items-center justify-center'>
        <div className='text-center	'>
          <p className='text-6xl sm:text-7xl font-medium'>
            Join Our Newsletter
          </p>
          <p className='text-lg mt-[0.8rem]'>
            Sign up for deals, new products and promotions
          </p>
          <div className='mt-[4.4rem]'>
            <InputText
              placeholder='Email address'
              preppend={<img src={letter} alt='Letter icon' />}
              append={<TextButton>Signup</TextButton>}
            />
          </div>
        </div>
      </div>
    </div>
    <img
      className='absolute z-0 w-full h-full top-0 object-cover md:object-fill'
      src={newsletterSection}
      alt='Newsletter background'
    />
  </div>
);

export default Newsletter;
