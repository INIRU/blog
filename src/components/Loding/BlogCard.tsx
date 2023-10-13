import style from '@/css/Blog.module.css';
import skeleton from '@/css/skeleton.module.css';

export default async function Skeleton() {
  return (
    <div className={`${style.blogCard} shadow-sm`}>
      <h1 className={`${style.cardTitle} ${skeleton.loding}`}></h1>
      <div className={style.cardContent}>
        <p className={skeleton.loding}></p>
      </div>
      <div className={style.cardFooter}>
        <div className={style.footerContent}>
          <i className={`${style.footerItem} ${skeleton.loding}`}></i>
          <span className={skeleton.loding}></span>
        </div>
        <div className="w-100"></div>
        <div className={style.footerContent}>
          <i className={`${style.footerItem} ${skeleton.loding}`}></i>
          <span className={skeleton.loding}></span>
        </div>
      </div>
    </div>
  );
}
