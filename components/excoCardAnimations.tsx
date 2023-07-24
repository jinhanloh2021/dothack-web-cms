'use client';
import { Variants, motion } from 'framer-motion';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

/**
 * Very bad, non reusable component. Only used once. Need this for client side animation.
 * Alternative is to create reusable hover to scale component that accepts classnames. But I'm a lazy piece of shit.
 */
export function ImageHoverScale({ children }: Props) {
  return (
    <div className='h-[20rem] w-[16rem] relative rounded-lg overflow-hidden'>
      <motion.div whileHover={{ scale: 1.1 }} className='h-[20rem] w-[16rem]'>
        {children}
      </motion.div>
    </div>
  );
}
const cardVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.5,
    },
  },
};

export function FlyInOnScroll({ children }: Props) {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.15 }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  );
}
