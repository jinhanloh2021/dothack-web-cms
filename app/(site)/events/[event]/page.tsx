import { getEvent } from '@/sanity/sanity.queries';
import React from 'react';

type Props = {
  params: { event: string };
};

export default async function Event({ params }: Props) {
  const event = await getEvent(params.event);
  return (
    <main>
      <h1 className='text-lg font-semibold'>{event.name}</h1>
      <p className='break-words'>{JSON.stringify(event, null, 2)}</p>
    </main>
  );
}
