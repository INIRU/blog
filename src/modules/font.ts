import type { NextFont } from 'next/dist/compiled/@next/font';

import {
  Noto_Sans_Mono,
  Autour_One,
  Pacifico,
  Black_Han_Sans,
  Gugi,
  Noto_Sans_KR,
  Fira_Code,
} from 'next/font/google';

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
});

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
});

const autourOne = Autour_One({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const blackHanSans = Black_Han_Sans({
  preload: false,
  display: 'swap',
  weight: '400',
});

const gugi = Gugi({ preload: false, weight: '400', display: 'swap' });

const notoSansKr = Noto_Sans_KR({ preload: false, display: 'swap' });

function NavbarLogoFont(): NextFont {
  const fontList = [notoSansMono, autourOne, pacifico];

  return fontList[Math.floor(Math.random() * fontList.length)];
}

function BlogTitleFont(): NextFont {
  const fontList = [blackHanSans, gugi, notoSansKr];

  return fontList[Math.floor(Math.random() * fontList.length)];
}

export {
  notoSansMono,
  autourOne,
  pacifico,
  blackHanSans,
  gugi,
  notoSansKr,
  firaCode,
  /** Func */
  NavbarLogoFont,
  BlogTitleFont,
};
