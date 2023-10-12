import '@/app/globals.css';
import style from '@/css/Error.module.css';

import { notoSansMono } from '@/modules/font';

import Image from 'next/image';
import Link from 'next/link';

export default function _404Page() {
  return (
    <div className={style.error}>
      <div className={`${style.container} ${notoSansMono.className}`}>
        <div className={`w-100 ${style.title}`}>
          <h1>4</h1>
          <Image src={'/INIRU.gif'} width={100} height={100} alt={'INIRU'} />
          <h1>4</h1>
        </div>
        <h4 className="w-100 text-center">페이지를 찾을 수 없습니다.</h4>
        <Link href={'/'} className={style.link}>
          HOME<span className={style.linkWhite}>으로 이동</span>
        </Link>
      </div>
    </div>
  );
}
