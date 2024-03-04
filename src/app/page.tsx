import style from '@/css/Blog.module.css';

import { connectDB } from '@/modules/database';
import { SpeedInsights } from '@vercel/speed-insights/next';

import BlogTitle from '@/components/Blog/BlogTitle';
import BlogCard from '@/components/Blog/BlogCard';

export default async function Home() {
  const db = (await connectDB).db('blog');
  const posts = (await db.collection('posts').find().toArray()).reverse();

  return (
    <main>
      <SpeedInsights />
      <div className={`container`}>
        <div className={style.titleContainer}>
          <BlogTitle />
        </div>
        <div className={`${style.cardContainer} mb-5`}>
          {posts.map((data, i) => {
            return (
              <BlogCard
                key={i}
                id={data._id}
                title={data.title}
                content={data.content}
                views={data.views}
                date={data.date}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
