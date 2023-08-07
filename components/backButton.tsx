'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';

type Props = {};

export default function BackButton({}: Props) {
  const router = useRouter();
  return (
    <Link
      href={'/events'}
      className='flex justify-end align-middle gap-1 p-0 mb-8 mt-6 hover:underline hover:cursor-pointer w-[80%] max-w-[30rem] mx-auto'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 33 33'
        className='w-[9px] h-[9px] my-auto'
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
    </Link>
  );
}
