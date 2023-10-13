import './globals.css';

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notoSansKr } from '@/modules/font';

import { Analytics } from '@vercel/analytics/react';

const Navbar = dynamic(() => import('@/components/Navbar/Navbar'));

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
      <body className={notoSansKr.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
