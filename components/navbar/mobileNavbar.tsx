import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import {
  CalendarIcon,
  HamburgerMenuIcon,
  HomeIcon,
} from '@radix-ui/react-icons';
import {
  Sheet,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetContent,
  SheetClose,
} from '../ui/sheet';
import { Separator } from '../ui/separator';
import Link from 'next/link';

const dropIn: Variants = {
  hidden: {
    y: '-52px',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
  exit: {
    y: '-52px',
    transition: {
      duration: 0.5,
      type: 'spring',
    },
  },
};

const MobileNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false); // scrolled down
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className='sm:hidden'>
      <AnimatePresence>
        {(visible || prevScrollPos <= 52) && (
          <motion.div
            className='py-4 fixed top-0 px-6 z-50 bg-transparent'
            key={'key'}
            initial='hidden'
            animate='visible'
            exit='exit'
            variants={dropIn}
          >
            <Sheet>
              <SheetTrigger>
                <div className='h-9 w-9 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-800 border border-slate-200 shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-[#2E4035] dark:hover:bg-[#2E4035] dark:hover:text-slate-50 dark:bg-gray-800 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '>
                  <HamburgerMenuIcon className='h-6 w-6' />
                </div>
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNavbar;
