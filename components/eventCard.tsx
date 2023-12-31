import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { reformatDate } from '@/lib/utils';

type Props = {
  slug: string;
  src: string;
  alt: string;
  name: string;
  date: string;
  author: string;
  lqip: string;
  excerpt: string;
};

export default function EventCard({
  slug,
  src,
  alt,
  name,
  date,
  author,
  lqip,
  excerpt,
}: Props) {
  return (
    <div className='w-[80%] max-w-[30rem] mx-auto'>
      <Link
        href={`/event/${slug}`}
        className='relative h-[30rem] block rounded-2xl overflow-hidden'
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes='(max-width: 640) 40vw, (max-width: 768) 25vw, 30vw'
          placeholder='blur'
          blurDataURL={lqip}
        />
      </Link>
      <p className='text-sm font-jetBrainsMono text-textSecondaryLight dark:text-textSecondaryDark mt-4 mx-auto'>
        {reformatDate(date)}
      </p>
      <Link href={`/event/${slug}`}>
        <p className='inline-block mx-auto text-4xl font-semibold font-EBGaramond mb-4 hover:underline hover:cursor-pointer'>
          {name}
        </p>
      </Link>
      <p className='mx-auto text-[15px] font-normal text-textSecondaryLight dark:text-textSecondaryDark leading-5 font-inter line-clamp-3'>
        {excerpt}
      </p>
    </div>
  );
}
