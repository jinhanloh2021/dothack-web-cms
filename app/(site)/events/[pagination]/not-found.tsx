import { Button } from '@/components/ui/button';
import Link from 'next/link';

/**
 * For not found page. Eg. events/999 page 999 doesn't exist.
 */

export default function NotFound() {
  return (
    <main className='text-center m-auto my-[32vh] md:my-[34vh]'>
      <h2 className='text-2xl font-bold'>Uh oh! Not Found</h2>
      <p className='text-lg font-inter text-textSecondaryLight dark:text-textSecondaryDark mb-6 mt-1'>
        This page could not be found. Please try again.
      </p>
      <Button
        variant={'ghost'}
        asChild
        className='hover:bg-[#E1EFE9] select-none'
      >
        <Link href={'/events/1'}>Go to Events</Link>
      </Button>
    </main>
  );
}
