import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';

export const metadata = {
  title: 'Event',
  description: '',
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
      selection:bg-[#90ebae81] dark:selection:bg-[#38ba6a53'
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
