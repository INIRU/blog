'use client';

import style from '@/css/Navbar.module.css';
import { NavbarLogoFont } from '@/modules/font';

import Image from 'next/image';

import { useEffect, useState } from 'react';

export default function NavbarLogo() {
  const [logo, setLogo] = useState(false);
  const [font] = useState<string>(NavbarLogoFont().className);

  return (
    <div
      className={style.logoContainer}
      onMouseOver={() => {
        setLogo(true);
      }}
      onMouseOut={() => {
        setLogo(false);
      }}
    >
      <Image
        src={`/INIRU.` + (logo ? 'gif' : 'png')}
        width={30}
        height={30}
        alt={'logo'}
      ></Image>
      <h4 className={font}>INIRU Blog</h4>
    </div>
  );
}
