import style from '@/css/Navbar.module.css';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const link: { name: string; link: string }[] = [
    { name: 'Portfolio', link: 'https://iniru.github.io' },
  ];

  return (
    <div className={style.navbar}>
      <Link href={'/'} className={style.logoContainer}>
        <Image src={'/INIRU.png'} width={30} height={30} alt={'logo'}></Image>
        <h4>INIRU Blog</h4>
      </Link>
    </div>
  );
}
