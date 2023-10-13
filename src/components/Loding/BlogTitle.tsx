import style from '@/css/Blog.module.css';

import Skeleton from '../Skeleton/Skeleton';

export default async function BlogTitleLoding() {
  return (
    <div style={{ height: '75px' }}>
      <Skeleton ch={[11]} _className={`${style.blogTitle} text-center`} />
    </div>
  );
}
