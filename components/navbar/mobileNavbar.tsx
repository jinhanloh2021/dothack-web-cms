import { useCallback, useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../ui/button';
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

const MobileNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <AnimatePresence>
      {(visible || prevScrollPos <= 52) && (
        <motion.nav
          className='py-2 fixed top-0'
          key={'nav'}
          initial={{ opacity: 1, y: -60 }} // hard code height of nav bar
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -60 }}
        >
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
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
