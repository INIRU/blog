import type { NextFont } from 'next/dist/compiled/@next/font';

import {
  Noto_Sans_Mono,
  Pixelify_Sans,
  Autour_One,
  Pacifico,
  Black_Han_Sans,
  Sunflower,
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

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '600',
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

const sunflower = Sunflower({ preload: false, weight: '700', display: 'swap' });

const gugi = Gugi({ preload: false, weight: '400', display: 'swap' });

const notoSansKr = Noto_Sans_KR({ preload: false, display: 'swap' });

function NavbarLogoFont(): NextFont {
  const fontList = [notoSansMono, pixelifySans, autourOne, pacifico];

  return fontList[Math.floor(Math.random() * fontList.length)];
}

function BlogTitleFont(): NextFont {
  const fontList = [blackHanSans, sunflower, gugi, notoSansKr];

  return fontList[Math.floor(Math.random() * fontList.length)];
}

export {
  notoSansMono,
  pixelifySans,
  autourOne,
  pacifico,
  blackHanSans,
  sunflower,
  gugi,
  notoSansKr,
  firaCode,
  /** Func */
  NavbarLogoFont,
  BlogTitleFont,
};
