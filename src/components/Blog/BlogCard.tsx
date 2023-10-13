import type { ObjectId } from 'mongodb';
import type {
  IconLookup,
  IconDefinition,
} from '@fortawesome/fontawesome-svg-core';

import style from '@/css/Blog.module.css';

import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { BlogTime } from '@/modules/blog-time';
import emojiRegex from 'emoji-regex';
import Link from 'next/link';

const eyeLookup: IconLookup = { prefix: 'far', iconName: 'eye' };
const eyeIconDefinition: IconDefinition = findIconDefinition(eyeLookup);

const clockLookup: IconLookup = { prefix: 'far', iconName: 'clock' };
const clockIconDefinition: IconDefinition = findIconDefinition(clockLookup);

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
              icon={eyeIconDefinition}
              className={style.footerItem}
            ></FontAwesomeIcon>
            <p>{views}</p>
          </div>
          <div className="w-100"></div>
          <div className={style.footerContent}>
            <FontAwesomeIcon
              icon={clockIconDefinition}
              className={style.footerItem}
            ></FontAwesomeIcon>
            <p>{BlogTime(date)}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
