import clientConfig from '../sanity/client.config';
import { PortableTextTypeComponentProps } from '@portabletext/react';
import { createClient } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';

const sanityClient = createClient(clientConfig);

type Props = {
  imageData: PortableTextTypeComponentProps<any>;
};

export default async function SanityImage({ imageData }: Props) {
  // console.log(imageData);
  const imageProps: any = useNextSanityImage(
    sanityClient,
    imageData.value.asset
  );
  if (imageProps === null) return <></>;
  // console.log(imageProps);
  // could use skeleton since to lqip for portable text images
  return (
    <Image
      src={imageProps.src}
      style={{ objectFit: 'cover' }}
      alt={imageData.value.alt}
      sizes='(max-width: 800px) 100vw, 800px'
      fill
    />
  );
}
