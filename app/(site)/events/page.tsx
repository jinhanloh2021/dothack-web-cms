import EventCard from '@/components/eventCard';
import { getAllEvents } from '@/sanity/sanity.queries';
import React from 'react';

type Props = {};

export default async function Events({}: Props) {
  const allEvents = await getAllEvents();
  return (
    <main className='my-24'>
      <h2 className='text-center text-[2.5rem] font-bold md:text-center md:mx-auto mb-8'>
        Events
      </h2>
      <div className='flex flex-col gap-16'>
        {allEvents.map((e: any, i: number) => (
          <EventCard
            key={i}
            slug={e.slug}
            src={e.image.src}
            alt={e.image.alt}
            name={e.name}
            author={e.author.name}
            date={e.date}
            lqip={e.image.lqip}
            excerpt={e.excerpt}
          />
        ))}
      </div>
    </main>
  );
}
