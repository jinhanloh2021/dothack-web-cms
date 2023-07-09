'use client';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import SpriteIcon from './SpriteIcon';

type Props = {};

export default function HeroArtDrag({}: Props) {
  const constraintRef = useRef<HTMLDivElement>(null);
  return (
    <div className='absolute h-[4rem] w-[4rem] bottom-[250px] right-[0px] z-10 rounded-full'>
      <motion.div ref={constraintRef} />
      <motion.div drag dragConstraints={constraintRef}>
        {/* original height of SVG is 64px 4rem */}
        <SpriteIcon
          id='fragmentArt'
          className={'absolute top-0 right-0 h-[4rem] w-[4rem] m-0 scale-[1]'}
        />
      </motion.div>
    </div>
  );
}
