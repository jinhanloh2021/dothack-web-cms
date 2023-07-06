'use client';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, buttonVariants } from './ui/button';
import { ModeToggle } from './modeToggle';
import useIsMobile from '@/lib/useIsMobile';
import debounce from 'lodash/debounce';
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
    <nav className='flex gap-4 py-4 fixed top-0 h-fit'>
      <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
        Home
      </Link>
      <Link href={'/events'} className={buttonVariants({ variant: 'outline' })}>
        Events
      </Link>
      <ModeToggle />
    </nav>
  );
};

const MobileNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setVisible(false); // scrolled down
      } else {
        setVisible(true);
      }
      setPrevScrollPos(currentScrollPos);
    }, 100),
    [prevScrollPos]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`py-2 fixed top-0 ${visible ? '' : 'hidden'}`}>
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
    </nav>
  );
};
