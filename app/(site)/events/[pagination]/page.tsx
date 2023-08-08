import EventCard from '@/components/eventCard';
import { getAllEvents } from '@/sanity/sanity.queries';
import React from 'react';

type Props = {
  params: { pagination: string };
};

export default async function Events({ params: { pagination } }: Props) {
  // Fixed variables. Doesn't matter what page.
  const NUM_EVENTS_PER_PAGE = 2;
  const allEvents = await getAllEvents(); //cached to prevent overFetching
  const numEvents = allEvents.length;
  const numPages = Math.ceil(numEvents / NUM_EVENTS_PER_PAGE);
  console.log(
    `Num events: ${numEvents}\nNum pages: ${numPages}\nCurrent page: ${pagination}`
  );

  // Varies based on current page
  const pageEvents = allEvents.slice(
    (+pagination - 1) * 2,
    (+pagination - 1) * 2 + NUM_EVENTS_PER_PAGE
  );

  return (
    <main className='my-24'>
      <h2 className='text-center text-[2.5rem] font-bold md:text-center md:mx-auto mb-8'>
        Events
      </h2>
      <div className='flex flex-col gap-16'>
        {pageEvents.map((e: any, i: number) => (
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
