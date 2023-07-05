'use client';
import Link from 'next/link';
import React from 'react';
import { Button, buttonVariants } from './ui/button';
import { ModeToggle } from './modeToggle';
import useIsMobile from '@/lib/useIsMobile';
import {
  Sheet,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetContent,
  SheetClose,
} from './ui/sheet';
import { Separator } from './ui/separator';
import {
  CalendarIcon,
  HamburgerMenuIcon,
  HomeIcon,
} from '@radix-ui/react-icons';

type Props = {};

export default function Navbar({}: Props) {
  const isMobile = !useIsMobile(); // requires client component
  return <>{isMobile ? <DesktopNavbar /> : <MobileNavbar />}</>;
}

const DesktopNavbar = () => {
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
};

const MobileNavbar = () => {
  return (
    <header className='py-2'>
      <Sheet>
        <SheetTrigger>
          <Button variant={'outline'} size={'icon'}>
            <HamburgerMenuIcon className='h-6 w-6' />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className='grid py-4'>
            <Separator />
            <SheetClose asChild>
              <Link
                href={'/'}
                className='flex flex-row justify-start items-center gap-4 py-4'
              >
                <HomeIcon />
                Home
              </Link>
            </SheetClose>
            <Separator />
            <SheetClose asChild>
              <Link
                href={'/events'}
                className='flex flex-row justify-start items-center gap-4 py-4'
              >
                <CalendarIcon />
                Events
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};
