import style from '@/css/Post.module.css';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import { connectDB } from '@/modules/database';
import { notoSansMono } from '@/modules/font';
import { ObjectId } from 'mongodb';
import { BlogTimeInfo } from '@/modules/blog-time';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

import Markdown from '@/components/Markdown/Markdown';
import View from '@/components/Blog/View';
import ControlBtn from '@/components/Blog/ControlBtn';

export default async function Post(props: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  const db = (await connectDB).db('blog');
  const viewLog = cookies().get(props.params.id);

  let result;

  try {
    result = await db
      .collection('posts')
      .findOne({ _id: new ObjectId(props.params.id) });
    if (!viewLog) {
      await db.collection('posts').updateOne(
        { _id: new ObjectId(props.params.id) },
        {
          $inc: { views: 1 },
        }
      );
    }
  } catch (e) {
    return redirect('/404');
  } finally {
    if (!(result instanceof Object)) {
      return redirect('/404');
    }
  }

  return (
    <div>
      <View id={props.params.id} />
      <div className={`mt-5 container`}>
        <h1 className={style.postTitle}>{result?.title}</h1>
        <div className={`${style.postInfo} mt-4`}>
          <p className={`${notoSansMono.className} ${style.postAuthor}`}>
            INIRU
          </p>
          <span>•</span>
          <p className={style.postTime}>{BlogTimeInfo(result?.date)}</p>
          <div className="w-100"></div>
          {session?.user?.email == 'iniru@kakao.com' ? (
            <ControlBtn id={props.params.id} />
          ) : null}
        </div>
        <hr className="mt-4" />
      </div>
      <div className={`${style.postContentConatiner} mt-4`}>
        <div className={style.postSide}></div>
        <div className={style.post}>
          <div className="markdown">
            <Markdown source={result?.content} />
          </div>
        </div>
        <div className={style.postSide}></div>
      </div>
    </div>
  );
}
