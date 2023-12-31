import './globals.css';

import type { Metadata } from 'next';
import { notoSansKr } from '@/modules/font';

import Navbar from '@/components/Navbar/Navbar';
import { Analytics } from '@vercel/analytics/react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faEye } from '@fortawesome/free-regular-svg-icons/faEye';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';

config.autoAddCss = false;

library.add(faEye, faClock);

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
    <html lang="en" data-color-mode="dark">
      <body className={notoSansKr.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
