import React from 'react';
import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  name: string;
  date: string;
  author: string;
  lqip: string;
  excerpt: string;
};

export default function EventCard({
  src,
  alt,
  name,
  date,
  author,
  lqip,
  excerpt,
}: Props) {
  return (
    <div>
      <div className='h-[30rem] w-[80%] max-w-[30rem] relative rounded-2xl overflow-hidden mx-auto'>
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 640) 40vw, (max-width: 768) 25vw, 30vw'
          placeholder='blur'
          blurDataURL={lqip}
        />
      </div>
      <p className='w-[80%] max-w-[30rem] text-sm text-textSecondaryLight dark:text-textSecondaryDark mt-4 mx-auto'>
        {date}
      </p>
      <p className='w-[80%] max-w-[30rem] mx-auto text-base font-medium font-nunito'>
        {name}
      </p>
      <p className='w-[80%] max-w-[30rem] mx-auto text-base font-medium font-nunito'>
        {excerpt}
      </p>
    </div>
  );
}
