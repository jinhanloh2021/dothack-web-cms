import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Events({}: Props) {
  return (
    <>
      <Link href={'events/1'}>Go to page 1</Link>
    </>
  );
}
