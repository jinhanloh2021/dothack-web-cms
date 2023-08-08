'use client';
import React from 'react';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
import SpriteIcon from './SpriteIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { Share2Icon } from '@radix-ui/react-icons';
import { Separator } from './ui/separator';

type Props = {
  title: string;
  url: string;
};

export default function ShareMenu({ title, url }: Props) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='focus-visible:ring-0 hover:bg-transparent dark:hover:bg-transparent text-textSecondaryLight dark:text-textSecondaryDark'
          >
            <Share2Icon height={16} width={16} />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          className='dark:text-textSecondaryDark text-textSecondaryLight'
        >
          <DropdownMenuItem
            className='flex items-center justify-start gap-2 w-full cursor-pointer'
            onClick={() => navigator.clipboard.writeText(url)}
          >
            <SpriteIcon
              id='linkShare'
              heightClass='h-[1.3em] w-[1.3em] inline'
            />
            <span>Copy link</span>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <TelegramShareButton
              title={title}
              url={url}
              className='flex items-center justify-start gap-2 w-full'
            >
              <SpriteIcon
                id='telegramShare'
                heightClass='h-[1.2em] w-[1.2em] inline'
              />
              <span>Share to Telegram</span>
            </TelegramShareButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <WhatsappShareButton
              title={title}
              url={url}
              className='flex items-center justify-start gap-2 w-full'
            >
              <SpriteIcon
                id='whatsappShare'
                heightClass='h-[1.2em] w-[1.2em] inline'
              />
              <span>Share to Whatsapp</span>
            </WhatsappShareButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FacebookShareButton
              title={title}
              url={url}
              className='flex items-center justify-start gap-2 w-full'
            >
              <SpriteIcon
                id='facebookShare'
                heightClass='h-[1.2em] w-[1.2em] inline'
              />
              <span>Share to Facebook</span>
            </FacebookShareButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TwitterShareButton
              title={title}
              url={url}
              className='flex items-center justify-start gap-2 w-full'
            >
              <SpriteIcon
                id='XShare'
                heightClass='h-[1.2em] w-[1.2em] inline'
              />
              <span>Share to X</span>
            </TwitterShareButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
