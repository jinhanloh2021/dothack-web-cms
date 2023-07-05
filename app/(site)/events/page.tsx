import { getEvents } from '@/sanity/sanity.queries';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default async function Events({}: Props) {
  const allEvents = await getEvents();
  // console.log(allEvents);
  return (
    <main >
      <h1>Events</h1>
      <div className='flex flex-col gap-8'>
        {allEvents.map((e: any, i: number) => (
          <article key={i * 10 + 2}>
            <Link
              href={`/events/${e.slug}`}
              key={i * 10}
              className='text-blue-400 underline'
            >
              {e.name}
            </Link>
            <p key={i * 10 + 1} className='break-words'>
              {JSON.stringify(e, null, 2)}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
