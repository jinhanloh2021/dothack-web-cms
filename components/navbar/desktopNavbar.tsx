import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ModeToggle } from '../modeToggle';

const DesktopNavbar = () => {
  return (
    <nav className='flex gap-4 py-4 md:py-6 fixed top-0 h-fit px-6 sm:px-16 md:px-24 lg:px-48 z-50 bg-transparent'>
      <Link
        href={'/'}
        className={
          buttonVariants({ variant: 'outline' }) +
          ' dark:bg-gray-800 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '
        }
      >
        Home
      </Link>
      <Link
        href={'/events'}
        className={
          buttonVariants({ variant: 'outline' }) +
          ' dark:bg-gray-800 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-10 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 '
        }
      >
        Events
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default DesktopNavbar;
