import { getEvents } from '@/sanity/sanity.queries';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Events({}: Props) {
  const allEvents = await getEvents();
  // console.log(allEvents);
  return (
    <main>
      <h1>Events</h1>
      <div className='flex flex-col gap-8'>
        {allEvents.map((e: any, i: number) => (
          <article key={i}>
            <Link
              href={`/events/${e.slug}`}
              className='text-blue-400 underline'
            >
              {e.name}
            </Link>
            <p className='break-words'>{JSON.stringify(e, null, 2)}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
