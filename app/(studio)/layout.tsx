import '@/styles/globals.css';

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
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
