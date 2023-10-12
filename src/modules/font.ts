import { NextFont } from 'next/dist/compiled/@next/font';
import {
  Noto_Sans_Mono,
  Pixelify_Sans,
  Yuji_Hentaigana_Akari,
  Autour_One,
  Pacifico,
  Black_Han_Sans,
  Sunflower,
  Gugi,
  Noto_Sans_KR,
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

const blackHanSans = Black_Han_Sans({ preload: false, weight: '400' });

const sunflower = Sunflower({ preload: false, weight: '700' });

const gugi = Gugi({ preload: false, weight: '400' });

const notoSansKr = Noto_Sans_KR({ preload: false, weight: '700' });

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

function BlogTitleFont(): NextFont {
  const fontList = [blackHanSans, sunflower, gugi, notoSansKr];

  return fontList[Math.floor(Math.random() * (fontList.length - 0)) + 0];
}

export {
  notoSansMono,
  pixelifySans,
  yujiHentaiganaAkari,
  autourOne,
  pacifico,
  blackHanSans,
  sunflower,
  gugi,
  notoSansKr,
  NavbarLogoFont,
  BlogTitleFont,
};
