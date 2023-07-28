import '@/styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar/index';
import Footer from '@/components/footer';

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
      <body
        className='dark:bg-offBlack bg-offWhite dark:text-offWhite text-offBlack font-montserrat tracking-wide overflow-x-hidden 
      selection:bg-[#90ebae81] dark:selection:bg-[#38ba6a53]'
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
