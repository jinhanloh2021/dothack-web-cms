import EventCard from '@/components/eventCard';
import EventsPagination from '@/components/eventsPagination';
import { getAllEvents } from '@/sanity/sanity.queries';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { pagination: string };
};

// localhost:3000/events/1
export default async function Events({ params: { pagination } }: Props) {
  // Fixed variables. Doesn't matter what page.
  const allEvents = await getAllEvents(); //cached to prevent overFetching
  const NUM_EVENTS_PER_PAGE = 6; // ? subject to change
  const totalPages = Math.ceil(allEvents.length / NUM_EVENTS_PER_PAGE);

  // Checking non-existent page or non-number page
  if (Number.isNaN(Number(pagination))) {
    notFound();
  } else if (Number(pagination) < 1 || Number(pagination) > totalPages) {
    notFound();
  }

  // Varies based on current page
  const pageEvents = allEvents.slice(
    (+pagination - 1) * NUM_EVENTS_PER_PAGE,
    (+pagination - 1) * NUM_EVENTS_PER_PAGE + NUM_EVENTS_PER_PAGE
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
      <EventsPagination page={Number(pagination)} totalPages={totalPages} />
    </main>
  );
}
