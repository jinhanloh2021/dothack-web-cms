import { getEvent } from '@/sanity/sanity.queries';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import {
  PortableText,
  PortableTextTypeComponentProps,
} from '@portabletext/react';
import SanityImage from '@/components/sanityImage';
import { cn, getInitials, reformatDate } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import CodeBlock from '@/components/codeBlock/CodeBlock';

type Props = {
  params: { event: string };
};

const customPortableTextComponents = {
  types: {
    image: (props: PortableTextTypeComponentProps<any>) => {
      return (
        <div className='h-[30rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] relative overflow-hidden mx-auto my-4'>
          <SanityImage imageData={props} />
        </div>
      );
    },
    code: (props: PortableTextTypeComponentProps<any>) => {
      return (
        <CodeBlock language={props.value.language}>
          {props.value.code}
        </CodeBlock>
      );
    },
  },
};

export default async function Event({ params }: Props) {
  const event = await getEvent(params.event);
  // console.log(event);
  return (
    <main className='mt-[20vh] min-h-[100vh]'>
      <div className='fixed top-0 w-full h-[20vh] -z-10'>
        <Image
          src={event.image?.src}
          alt={event.image.alt}
          fill
          style={{ objectFit: 'cover' }}
          placeholder='blur'
          blurDataURL={event.image.lqip}
        />
      </div>
      <div className='px-[7%] sm:px-[15%] md:px-[20%] lg:px-[25%] xl:px-[30%] bg-offWhite dark:bg-offBlack pt-4 pb-6'>
        <h1 className='font-EBGaramond text-4xl font-bold'>{event.name}</h1>
        <div className='my-4 flex justify-start items-start gap-2'>
          <Avatar className='border-[1px]'>
            <AvatarImage src={`${event.author.image.src}?h=50`} />
            <AvatarFallback>{getInitials(event.author.name)}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col justify-start items-start font-nunito]'>
            <p className='font-medium mb-[-4px]'>{event.author.name}</p>
            <p className='text-[13px] text-textSecondaryLight dark:text-textSecondaryDark'>
              {event.author.position}
            </p>
          </div>
        </div>
        <Separator />
        <p className='text-sm font-jetBrainsMono text-textSecondaryLight dark:text-textSecondaryDark'>
          <span>{reformatDate(event.date) + ' '}</span>
          <span className='text-xl font-jetBrainsMono relative top-[2px] text-textSecondaryLight dark:text-textSecondaryDark'>
            {'•'}
          </span>
          <span>{' 5 min read'}</span>
        </p>
      </div>
      <div
        className={cn(
          styles.portable_text,
          'bg-offWhite',
          'dark:bg-offBlack',
          'font-inter',
          'text-base',
          'leading-5',
          'px-[7%]',
          'sm:px-[15%]',
          'md:px-[20%]',
          'lg:px-[25%]',
          'xl:px-[30%]'
        )}
      >
        <PortableText
          value={event.content}
          components={customPortableTextComponents}
        />
      </div>
    </main>
  );
}

// const e = {
//   slug: 'heap-2023',
//   image: {
//     src: 'https://cdn.sanity.io/images/fdfze30c/production/7938ea720e307939b8a13dbe1ae8e3482d357246-1080x1080.png',
//     alt: 'Poster for HEAP 2023 event',
//     lqip: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD7ElEQVQ4jT2UaU...,
//     hotspot: null,
//   },
//   author: { name: 'Jin Han', position: 'Tech Executive', image: { src: null } },
//   excerpt:
//     'This is a short summary of the event. It is required for rendering the preview page of the event. It needs to be at least 100 characters long.',
//   content: [
//     {
//       markDefs: [],
//       children: [
//         {
//           text: 'This event was held over the summer break where students get to join many workshops and learn about web development. They learn a lot and it was good. Here is some code that they wrote.',
//           _key: 'a1ac4da46e4d',
//           _type: 'span',
//           marks: [],
//         },
//       ],
//       _type: 'block',
//       style: 'normal',
//       _key: '0957b445b092',
//     },
//     {
//       _type: 'code',
//       language: 'jsx',
//       _key: '671582eb8b34',
//       code: 'const Header = ({text}) => {\n text.toUpper();\n return <H1>{text}</H1>\n}',
//       filename: 'Header.jsx',
//     },
//     {
//       style: 'normal',
//       _key: 'e438edc0882e',
//       markDefs: [],
//       children: [
//         {
//           _type: 'span',
//           marks: [],
//           text: 'Overall they really enjoyed the event.',
//           _key: 'b54968326a4b',
//         },
//       ],
//       _type: 'block',
//     },
//     {
//       _type: 'block',
//       style: 'normal',
//       _key: '292f714ca875',
//       markDefs: [],
//       children: [{ _type: 'span', marks: [], text: '', _key: '34c68bb25f26' }],
//     },
//     {
//       _type: 'image',
//       alt: 'Group photo of the participants for our React Basics workshop',
//       _key: '93c79231fa85',
//       asset: {
//         _type: 'reference',
//         _ref: 'image-a06696f18a269da7db5643c6b809dca403d41fa7-1080x1080-png',
//       },
//       crop: {
//         bottom: 0.267156862745098,
//         _type: 'sanity.imageCrop',
//         right: 0.022058823529411686,
//         top: 0.2598039215686273,
//         left: 0.029411764705882304,
//       },
//       hotspot: {
//         _type: 'sanity.imageHotspot',
//         width: 0.44362745098039286,
//         x: 0.47916666666666663,
//         y: 0.4987745098039216,
//         height: 0.13970588235294162,
//       },
//     },
//   ],
//   name: 'Heap 2023',
//   date: '2023-07-19',
// };
