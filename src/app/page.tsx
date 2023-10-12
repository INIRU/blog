import BlogTitle from '@/components/Blog/BlogTitle';
import BlogCard from '@/components/Blog/BlogCard';

import style from '@/css/Blog.module.css';

import { connectDB } from '@/modules/database';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default async function Home() {
  const db = (await connectDB).db('blog');
  const posts = (await db.collection('posts').find().toArray()).reverse();

  const session = await getServerSession(authOptions);

  return (
    <main>
      <div className={`container`}>
        <div className={style.titleContainer}>
          <BlogTitle />
        </div>
        <div className={style.cardContainer}>
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
        {session?.user?.email == 'iniru@kakao.com' ? (
          <div className={style.writeContainer}>
            <Link href={'/write'}>
              <div className={`btn btn-div ${style.writeBtn}`}>
                <FontAwesomeIcon icon={faPen} className={style.writeIcon} />
                <p>글쓰기</p>
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </main>
  );
}
