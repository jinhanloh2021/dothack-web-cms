'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EventBack() {
  const [backClicked, setBackClicked] = useState(false);
  const router = useRouter();
  const backClickHandler = () => {
    if (backClicked) {
      return;
    }
    setBackClicked(true);
    router.back();
  };
  return (
    <p
      className='ease-linear duration-150 text-textSecondaryLight hover:text-offBlack dark:text-textSecondaryDark dark:hover:text-offWhite flex justify-start items-center gap-1 hover:cursor-pointer mt-1 mb-3 w-[47px] relative'
      onClick={backClickHandler}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 33 33'
        className='w-[9px] h-[9px]'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='5.3'
          d='M23 30 10 16 23 3'
        />
      </svg>
      <span className='text-sm font-inter'>Back</span>
    </p>
  );
}
