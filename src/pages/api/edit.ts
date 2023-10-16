import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/modules/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const session = await getServerSession(req, res, authOptions);

    if (session?.user?.email !== 'iniru@kakao.com') {
      return res.status(401).json('');
    }

    try {
      const db = (await connectDB).db('blog');
      db.collection('posts').updateOne(
        { _id: new ObjectId(req.body.id) },
        {
          $set: {
            title: req.body.title,
            content: req.body.content,
          },
        }
      );
      res.status(200).redirect(302, '/');
    } catch (e) {
      res.status(500).json('');
    }
  }
}
