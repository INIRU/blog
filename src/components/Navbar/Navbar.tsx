import style from '@/css/Navbar.module.css';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { notoSansMono } from '@/modules/font';

import NavbarLogoLoding from '@/components/Loding/NavbarLogo';
import NavbarAuthLoding from '../Loding/NavbarAuth';

const NavbarLogo = dynamic(() => import('@/components/Navbar/NavbarLogo'), {
  loading: () => <NavbarLogoLoding />,
});
const NavbarAuth = dynamic(() => import('@/components/Navbar/NavbarAuth'), {
  loading: () => <NavbarAuthLoding />,
});

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
      <NavbarAuth session={session} />
    </div>
  );
}
