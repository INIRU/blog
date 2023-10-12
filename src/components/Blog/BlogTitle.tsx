'use client';

import style from '@/css/Blog.module.css';
import { BlogTitleFont, notoSansKr } from '@/modules/font';

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

  return (
    <div style={{ height: '75px' }}>
      <h1
        className={`${style.blogTitle} ${font} ${notoSansKr.className} text-center`}
      >
        {title}
      </h1>
    </div>
  );
}
