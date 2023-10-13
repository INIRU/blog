import style from '@/css/Blog.module.css';
import skeleton from '@/css/skeleton.module.css';

export default async function BlogTitle() {
  return (
    <div style={{ height: '75px' }}>
      <h2 className={`${style.blogTitle} ${skeleton.loding} text-center`}></h2>
    </div>
  );
}
