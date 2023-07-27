import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';

export const metadata = {
  title: '.Hack Events',
  description: 'Events organised by SMU .Hack',
  icons: {
    icon: '/assets/images/favicon.png',
  },
};

export default function EventLayout({
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
