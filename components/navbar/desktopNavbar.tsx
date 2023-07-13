import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { ModeToggle } from '../modeToggle';

const DesktopNavbar = () => {
  return (
    <nav className='flex gap-4 py-4 md:py-6 fixed top-0 h-fit px-6 sm:px-16 md:px-24 lg:px-48 z-50'>
      <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
        Home
      </Link>
      <Link href={'/events'} className={buttonVariants({ variant: 'outline' })}>
        Events
      </Link>
      <ModeToggle />
    </nav>
  );
};

export default DesktopNavbar;
