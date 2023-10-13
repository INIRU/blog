'use client';

import style from '@/css/Navbar.module.css';

import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { Session } from 'next-auth';

export default function NavbarAuth({ session }: { session: Session | null }) {
  return (
    <div className={style.authContainer}>
      {session ? (
        <Image
          className={style.authUser}
          src={session.user?.image as string}
          alt={session.user?.name as string}
          width={35}
          height={35}
          onClick={() => {
            signOut();
          }}
        ></Image>
      ) : (
        <FontAwesomeIcon
          icon={faUser}
          onClick={() => {
            signIn();
          }}
        ></FontAwesomeIcon>
      )}
    </div>
  );
}
