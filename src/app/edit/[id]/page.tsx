import Form from '@/components/Write/Form';

import { redirect } from 'next/navigation';
import { connectDB } from '@/modules/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function Edit(props: { params: { id: string } }) {
  const session = await getServerSession(authOptions);

  if (
    session?.user?.email != 'iniru@kakao.com' &&
    process.env.NODE_ENV !== 'development'
  ) {
    redirect('/');
  }

  const db = (await connectDB).db('blog');
  let result;

  try {
    result = await db
      .collection('posts')
      .findOne({ _id: new ObjectId(props.params.id) });
  } catch (e) {
    return redirect('/404');
  } finally {
    if (!(result instanceof Object)) {
      return redirect('/404');
    }
  }

  return (
    <Form
      id={result._id.toString()}
      _title={result.title}
      _content={result.content}
    />
  );
}
