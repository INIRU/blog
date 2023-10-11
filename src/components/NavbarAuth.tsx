'use client';

import style from '@/css/Navbar.module.css';

import { signIn } from 'next-auth/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function NavbarAuth() {
  return (
    <div
      className={style.authContainer}
      onClick={() => {
        signIn();
      }}
    >
      <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
    </div>
  );
}
