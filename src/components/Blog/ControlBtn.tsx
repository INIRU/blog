'use client';

import style from '@/css/Post.module.css';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';
import { useState } from 'react';

export default function ControlBtn({ id }: { id: string }) {
  const router = useRouter();

  return (
    <div className={style.controlContainer}>
      <Link href={`/edit/${id}`}>
        <button>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </Link>
      <button
        onClick={() => {
          fetch(`/api/delete/${id}`, { method: 'GET' })
            .then((r) => {
              if (r.status == 200) {
                return r.json();
              } else {
                alert(r.status + ' | ' + r.statusText);
              }
            })
            .then(() => {
              router.refresh();
              router.push('/');
            });
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}
