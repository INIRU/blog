import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/modules/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { ObjectId } from 'mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    const session = await getServerSession(req, res, authOptions);

    if (session?.user?.email !== 'iniru@kakao.com') {
      return res.status(401).json('');
    }

    try {
      let db = (await connectDB).db('blog');
      db.collection('posts').deleteOne({
        _id: new ObjectId(req.query.id as string),
      });
      res.status(200).json('');
    } catch {
      res.status(500).json('');
    }
  }
}
