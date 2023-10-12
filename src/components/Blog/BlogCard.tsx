import type { ObjectId } from 'mongodb';

import style from '@/css/Blog.module.css';

import { faEye, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BlogTime } from '@/modules/blog-time';
import emojiRegex from 'emoji-regex';
import Link from 'next/link';

export default function BlogCard({
  id,
  title,
  content,
  views,
  date,
}: {
  id: ObjectId;
  title: string;
  content: string;
  views: number;
  date: string;
}) {
  return (
    <Link href={`/post/${id}`} className="w-100">
      <div className={`${style.blogCard} shadow-sm`}>
        <h1 className={style.cardTitle}>{title}</h1>
        <div className={style.cardContent}>
          <p>
            {content
              .replace(/[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi, '')
              .replace(emojiRegex(), '')}
          </p>
        </div>
        <div className={style.cardFooter}>
          <div className={style.footerContent}>
            <FontAwesomeIcon
              icon={faEye}
              className={style.footerItem}
            ></FontAwesomeIcon>
            <p>{views}</p>
          </div>
          <div className="w-100"></div>
          <div className={style.footerContent}>
            <FontAwesomeIcon
              icon={faClock}
              className={style.footerItem}
            ></FontAwesomeIcon>
            <p>{BlogTime(date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
