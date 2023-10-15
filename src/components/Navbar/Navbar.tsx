import style from '@/css/Navbar.module.css';

import Link from 'next/link';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { notoSansMono } from '@/modules/font';

import NavbarLogo from './NavbarLogo';
import NavbarAuth from './NavbarAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons/faFeather';

export default async function Navbar() {
  const link: { name: string; link: string }[] = [
    { name: 'Portfolio', link: 'https://iniru.github.io' },
  ];

  const session = await getServerSession(authOptions);

  return (
    <div className={`${style.navbar} ps-4 pe-4`}>
      <Link href={'/'} className={style.logoContainer}>
        <NavbarLogo />
      </Link>
      <div>
        {link.map((data: { name: string; link: string }, i: number) => {
          return (
            <Link
              href={data.link}
              className={`${style.navLink} ${notoSansMono.className}`}
              key={i}
            >
              {data.name}
            </Link>
          );
        })}
      </div>
      <div className="w-100"></div>
      <div className={style.navbarUserContainer}>
        {session?.user?.email == 'iniru@kakao.com' ? (
          <Link href={'/write'}>
            <div className={`${style.writeBtn}`}>
              <FontAwesomeIcon icon={faFeather} />
              <p>글 작성</p>
            </div>
          </Link>
        ) : null}
        <NavbarAuth session={session} />
      </div>
    </div>
  );
}
