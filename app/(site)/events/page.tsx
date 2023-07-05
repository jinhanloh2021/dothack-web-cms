import { getEvents } from '@/sanity/sanity.queries';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Events({}: Props) {
  const allEvents = await getEvents();
  // console.log(allEvents);
  return (
    <>
      {allEvents.map((e: any, i: number) => (
        <>
          <Link
            href={`/events/${e.slug}`}
            key={i}
            className='text-blue-400 underline'
          >
            {e.name}
          </Link>
          <p key={i}>{JSON.stringify(e, null, 2)}</p>
        </>
      ))}
    </>
  );
}
