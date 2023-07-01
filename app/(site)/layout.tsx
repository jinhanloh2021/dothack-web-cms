import Link from 'next/link';
import '../globals.css';
export const metadata = {
  title: 'DotHack',
  description: 'Welcome to SMU .Hack!',
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
          <Link href={'/'} className='text-blue-400 underline'>
            Home
          </Link>
          <Link href={'/events'} className='text-blue-400 underline'>
            Events
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
