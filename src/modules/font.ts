import { NextFont } from 'next/dist/compiled/@next/font';
import {
  Noto_Sans_Mono,
  Pixelify_Sans,
  Yuji_Hentaigana_Akari,
  Autour_One,
  Pacifico,
} from 'next/font/google';

const notoSansMono = Noto_Sans_Mono({
  subsets: ['latin'],
});

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
});

const yujiHentaiganaAkari = Yuji_Hentaigana_Akari({
  subsets: ['latin'],
  weight: '400',
});

const autourOne = Autour_One({
  subsets: ['latin'],
  weight: '400',
});

const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });

function NavbarLogoFont(): NextFont {
  const fontList = [
    notoSansMono,
    pixelifySans,
    yujiHentaiganaAkari,
    autourOne,
    pacifico,
  ];

  return fontList[Math.floor(Math.random() * (fontList.length - 0)) + 0];
}

export {
  notoSansMono,
  pixelifySans,
  yujiHentaiganaAkari,
  autourOne,
  pacifico,
  NavbarLogoFont,
};
