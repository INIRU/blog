import dynamic from 'next/dynamic';

import style from '@/css/Blog.module.css';
import skeleton from '@/css/skeleton.module.css';

const Skeleton = dynamic(() => import('@/components/Skeleton/Skeleton'));

export default async function BlogCardLoding() {
  return (
    <div className={`${style.blogCard} shadow-sm`}>
      <Skeleton ch={[10]} _className={style.cardTitle} />
      <div className={style.cardContent}>
        <Skeleton ch={[17, 26, 24, 20]} />
      </div>
      <div className={style.cardFooter}>
        <div className={style.footerContent}>
          <Skeleton ch={[3]} _className={style.footerItem} />
          <Skeleton ch={[5]} />
        </div>
        <div className="w-100"></div>
        <div className={style.footerContent}>
          <Skeleton ch={[3]} _className={style.footerItem} />
          <Skeleton ch={[5]} />
        </div>
      </div>
    </div>
  );
}
