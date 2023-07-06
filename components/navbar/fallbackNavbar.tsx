import React from 'react';
import { Skeleton } from '../ui/skeleton';

type Props = {};

export default function FallbackNavbar({}: Props) {
  return (
    <nav className='flex gap-2 py-4 fixed top-0 h-6'>
      <Skeleton className='h-8 w-16 rounded-xl' />
      <Skeleton className='h-8 w-16 rounded-xl' />
    </nav>
  );
}
