'use client';

import style from '@/css/Blog.module.css';
import { BlogTitleFont } from '@/modules/font';

import { typing, erase, wait } from '@/modules/hangul';
import { useState, useEffect } from 'react';

export default function BlogTitle() {
  const [title, setTitle] = useState('우당탕탕 개발 블로그');
  const [font, setFont] = useState(BlogTitleFont().className);

  function typeName(letter: string, i: number) {
    typing({ text: letter, state: title, setState: setTitle }).then(
      async (state): Promise<void> => {
        await wait(2000);
        await erase(state, setTitle, 100);
        await wait(500);
        setFont(BlogTitleFont().className);
        typeName(letter, i);
      }
    );
  }

  useEffect(() => {
    typeName('우당탕탕 개발 블로그', 0);
  }, []);

  return <h1 className={`${style.blogTitle} ${font} text-center`}>{title}</h1>;
}
