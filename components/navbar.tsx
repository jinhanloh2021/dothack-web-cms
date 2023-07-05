import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { ModeToggle } from './ui/modeToggle';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className='flex gap-4 py-4'>
      <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
        Home
      </Link>
      <Link href={'/events'} className={buttonVariants({ variant: 'outline' })}>
        Events
      </Link>
      <ModeToggle />
    </header>
  );
}
