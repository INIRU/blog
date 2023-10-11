import './globals.css';
import type { Metadata } from 'next';
import { notoSansMono } from '@/modules/font';

import Navbar from '@/components/Navbar';
import { Analytics } from '@vercel/analytics/react';

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
        <Analytics />
      </body>
    </html>
  );
}
