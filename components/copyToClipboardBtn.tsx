'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { CheckIcon, CopyIcon } from '@radix-ui/react-icons';

type Props = {
  text: string;
};

export default function CopyToClipboardBtn({ text }: Props) {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setClicked(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [clicked]);
  return clicked ? (
    <Button
      variant='ghost'
      size='icon'
      className='pointer-events-none hidden md:inline-block relative w-[26px] h-[26px]'
    >
      <CheckIcon className='h-[1.2rem] w-[1.2rem] m-auto relative' />
      <span className='sr-only'>Copied</span>
    </Button>
  ) : (
    <Button
      variant='ghost'
      size='icon'
      className=' hidden md:inline-block relative w-[26px] h-[26px]'
      onClick={() => {
        navigator.clipboard.writeText(text);
        setClicked(true);
      }}
    >
      <CopyIcon className='h-[1rem] w-[1rem] m-auto relative' />
      <span className='sr-only'>Copy</span>
    </Button>
  );
}
