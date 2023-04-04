import Header from '@/components/header';
import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'MTG Group',
  description: 'Information about the MTG Group',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
