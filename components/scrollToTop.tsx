'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowUpIcon } from '@radix-ui/react-icons';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {};

export default function ScrollToTop({}: Props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className='w-9 h-9 fixed bottom-10 right-6 sm:right-10'
          key={'button'}
          initial={{ scale: 0, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0, y: 30, opacity: 0 }}
        >
          <Button
            className='shadow-lg dark:shadow-lg dark:bg-gray-100 dark:hover:bg-gray-0 bg-gray-0 bg-clip-padding dark:backdrop-filter backdrop-filter backdrop-blur-sm dark:backdrop-blur-sm bg-opacity-0 dark:bg-opacity-0'
            variant={'outline'}
            onClick={scrollTop}
            size={'icon'}
          >
            <ArrowUpIcon />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
