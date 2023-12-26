import React from 'react';

// Static
import { navigationLink, socialLinks } from '../../../static/links';

const Footer = () => (
  <div className='bg-primary pt-[8rem] pb-[3.2rem] px-[2rem] sm:px-0'>
    <div className='container'>
      <div className='flex flex-col sm:flex-row justify-between'>
        <div className='border-l border-gray-500 pl-[3.2rem]'>
          <p className='text-gray-300 text-sm'>Gift & Decoration Store</p>
        </div>
        <div className='flex gap-[2rem] sm:gap-[4rem] flex-col sm:flex-row mt-[4rem] sm:mt-0'>
          {navigationLink.map((item, index) => (
            <a
              key={item.label}
              href={item.link}
              className='text-sm text-grey-100'
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-[4rem] md:gap-0 justify-between border-t border-gray-500 mt-[4.9rem] py-[1.6rem]'>
        <div className='flex flex-col-reverse md:flex-row gap-[2.8rem] items-center'>
          <p className='text-gray-300 text-ssm'>
            Copyright © 2023 Gift & Decoration Store. All rights reserved
          </p>
          <div className='flex gap-[2.8rem] items-center'>
            <a className='font-semibold text-ssm text-gray-300' href='/'>
              Privacy Policy
            </a>
            <a className='font-semibold text-ssm text-gray-300' href='/'>
              Terms of Use
            </a>
          </div>
        </div>
        <div className='flex justify-center gap-[2.4rem]'>
          {socialLinks.map((social) => (
            <a
              key={social.alt}
              href={social.link}
              target='_blank'
              rel='noreferrer'
            >
              <img src={social.image} alt={social.alt} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
