import style from '@/css/Navbar.module.css';

import Link from 'next/link';
import NavbarLogo from './NavbarLogo';
import NavbarAuth from './NavbarAuth';

export default function Navbar() {
  const link: { name: string; link: string }[] = [
    { name: 'Portfolio', link: 'https://iniru.github.io' },
  ];

  return (
    <div className={style.navbar}>
      <Link href={'/'} className={style.logoContainer}>
        <NavbarLogo></NavbarLogo>
      </Link>
      <div>
        {link.map((data: { name: string; link: string }, i: number) => {
          return (
            <Link href={data.link} className={style.navLink} key={i}>
              {data.name}
            </Link>
          );
        })}
      </div>
      <div className="w-100"></div>
      <NavbarAuth />
    </div>
  );
}
