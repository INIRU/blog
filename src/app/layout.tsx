import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Mono } from 'next/font/google';

import Navbar from '@/components/Navbar';

const notoSansMono = Noto_Sans_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '우당탕탕 개발 블로그',
  description: 'Next.JS Blog Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={notoSansMono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
