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
      <body className='px-6'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          <>{children}</>
        </ThemeProvider>
      </body>
    </html>
  );
}
