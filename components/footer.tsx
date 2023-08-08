import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';
import { Separator } from './ui/separator';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className=''>
      <Separator className='bg-zinc-200 dark:bg-zinc-700 w-[80%] mx-auto mb-10' />
      <div className='mx-auto flex justify-center items-center gap-10'>
        <Link
          href='https://www.instagram.com/smu.hack/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <InstagramLogoIcon className='w-6 h-6 ease-linear duration-150 text-textSecondaryLight hover:text-offBlack dark:text-textSecondaryDark dark:hover:text-offWhite ' />
        </Link>
        <Link
          href='https://www.linkedin.com/company/smuhack/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInLogoIcon className='w-6 h-6 ease-linear duration-150 text-textSecondaryLight hover:text-offBlack dark:text-textSecondaryDark dark:hover:text-offWhite' />
        </Link>
        <Link
          href='https://github.com/smu-hack-dsc'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubLogoIcon className='w-6 h-6 ease-linear duration-150 text-textSecondaryLight hover:text-offBlack dark:text-textSecondaryDark dark:hover:text-offWhite' />
        </Link>
      </div>
      <p className='text-right font-inter text-xs md:text-sm text-textSecondaryLight dark:text-textSecondaryDark w-[80%] mx-auto mt-10 mb-4'>
        © 2023 .HACK
      </p>
    </footer>
  );
}
