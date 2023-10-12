import style from '@/css/Post.module.css';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { connectDB } from '@/modules/database';
import { notoSansMono } from '@/modules/font';
import { ObjectId } from 'mongodb';
import { BlogTimeInfo } from '@/modules/blog-time';

import BlogContent from '@/components/Blog/BlogContent';

export default async function Post(props: { params: { id: string } }) {
  const db = (await connectDB).db('blog');
  const viewLog = cookies().get(props.params.id);

  let result;

  try {
    result = await db
      .collection('posts')
      .findOne({ _id: new ObjectId(props.params.id) });
  } catch (e) {}

  if (!(result instanceof Object)) {
    redirect('/404');
  }

  if (!viewLog) {
    db.collection('posts').updateOne(
      { _id: new ObjectId(props.params.id) },
      {
        $inc: { views: 1 },
      }
    );
  }

  return (
    <div>
      <div className={`mt-5 container`}>
        <h1 className={style.postTitle}>{result?.title}</h1>
        <div className={`${style.postInfo} mt-4`}>
          <p className={`${notoSansMono.className} ${style.postAuthor}`}>
            INIRU
          </p>
          <span>•</span>
          <p style={{ filter: 'brightness(0.85)' }}>
            {BlogTimeInfo(result?.date)}
          </p>
        </div>
        <hr className="mt-4" />
      </div>
      <div className={`${style.postContentConatiner} mt-4`}>
        <div className={style.postSide}></div>
        <div className={style.post}>
          <BlogContent content={result?.content} _id={result._id.toString()} />
        </div>
        <div className={style.postSide}></div>
      </div>
    </div>
  );
}
