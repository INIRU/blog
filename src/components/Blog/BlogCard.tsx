import style from '@/css/Blog.module.css';
import { faEye, faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BlogTime from '@/modules/blog-time';

export default function BlogCard({
  title,
  content,
  views,
  date,
}: {
  title: string;
  content: string;
  views: number;
  date: string;
}) {
  return (
    <div className={`${style.blogCard} shadow-sm`}>
      <h1 className={style.cardTitle}>{title}</h1>
      <div className={style.cardContent}>
        <p>
          {content.replace(
            /[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi,
            ''
          )}
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
  );
}