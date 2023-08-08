import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

type Props = {
  page: number;
  totalPages: number;
};

export default function EventsPagination({ page, totalPages }: Props) {
  return (
    <div
      className={cn(
        ' flex mb-8 mt-6 w-[80%] max-w-[30rem] mx-auto ',
        page === 1
          ? 'justify-end' // first page
          : page === totalPages
          ? 'justify-start' // last page
          : 'justify-between', // middle pages
        totalPages === 1 && 'hidden' //case only when there is one page
      )}
    >
      {page === 1 ? (
        <></>
      ) : (
        <Link
          href={`/events/${page - 1}`}
          className='flex justify-end gap-1 p-0 items-center hover:cursor-pointer ease-linear duration-150 text-textSecondaryLight hover:text-offBlack dark:text-textSecondaryDark dark:hover:text-offWhite active:font-semibold'
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
          <span className='text-sm font-inter'>Prev Page</span>
        </Link>
      )}
      {page === totalPages ? (
        <></>
      ) : (
        <Link
          href={`/events/${page + 1}`}
          className='flex justify-end gap-1 p-0 items-center hover:cursor-pointer ease-linear duration-150 text-textSecondaryLight hover:text-offBlack dark:text-textSecondaryDark dark:hover:text-offWhite active:font-semibold'
        >
          <span className='text-sm font-inter'>Next Page</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-[9px] h-[9px] my-auto relative top-[.5px]'
            fill='none'
            viewBox='0 0 19 32'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='5.3'
              d='m3 29 13-13L3 3'
            />
          </svg>
        </Link>
      )}
    </div>
  );
}
