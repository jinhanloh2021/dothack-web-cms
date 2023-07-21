import React from 'react';
import Image from 'next/image';

type Props = {
  src?: string;
  name: string;
  position: string;
  lqip?: string;
};

export default function ExcoCard({ src, name, position, lqip }: Props) {
  return (
    <div>
      <div className='h-[20rem] w-[16rem] relative rounded-lg overflow-hidden flex flex-col justify-end bg-zinc-200 dark:bg-[#282828]'>
        {src ? (
          <Image
            src={src}
            alt={`${name} ${position} of dotHack`}
            fill
            style={{ objectFit: 'cover' }}
            sizes='(max-width: 640) 40vw, (max-width: 768) 25vw, 30vw'
            placeholder='blur'
            blurDataURL={lqip}
          />
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 159 170'
            className='h-[15rem]'
          >
            <path
              className='fill-zinc-400 dark:fill-zinc-600'
              d='M109 12C101 4 91 0 80 0 68 0 58 4 50 12c-7 8-11 19-10 31 2 23 19 42 40 42 20 0 37-19 39-42 1-12-3-23-10-31Zm38 158H12a12 12 0 0 1-9-4c-3-3-4-7-3-11 3-18 14-33 29-43 14-10 32-15 51-15 18 0 36 5 50 15 15 10 26 25 29 43 1 4 0 8-3 11a12 12 0 0 1-9 4Z'
            />
          </svg>
        )}
      </div>
      <p className='text-sm text-textSecondaryLight dark:text-textSecondaryDark max-w-[36rem] mt-4'>
        {position}
      </p>
      <p className='text-base font-medium font-nunito max-w-[36rem]'>{name}</p>
    </div>
  );
}
