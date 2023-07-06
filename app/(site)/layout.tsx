import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
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
    <html lang='en' suppressHydrationWarning>
      <body className='pt-[3.25rem] md:pt-[4.25rem] px-6 sm:px-16 md:px-24 lg:px-48 xl:px-80'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
