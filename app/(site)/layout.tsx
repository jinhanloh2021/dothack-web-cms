import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar/index';
export const metadata = {
  title: '.Hack',
  description: 'SMU .Hack student development club',
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='pt-[4.25rem] dark:bg-offBlack bg-offWhite dark:text-offWhite text-offBlack font-montserrat tracking-wide overflow-x-hidden'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
