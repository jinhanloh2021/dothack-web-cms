import Link from 'next/link';
import '@/styles/globals.css';
import { buttonVariants } from '@/components/ui/button';
export const metadata = {
  title: '.Hack',
  description: 'SMU .Hack student development club',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header className='flex gap-4 p-2 border-solid border-2'>
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            Home
          </Link>
          <Link
            href={'/events'}
            className={buttonVariants({ variant: 'outline' })}
          >
            Events
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
