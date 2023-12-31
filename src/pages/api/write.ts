import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/modules/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const session = await getServerSession(req, res, authOptions);

    if (session?.user?.email !== 'iniru@kakao.com') {
      return res.status(401).json('');
    }

    Object.keys(req.body).forEach((data) => {
      if (req.body[data] === '') {
        res.status(400).json('');
      }
    });

    req.body.date = new Date();
    req.body.views = 0;

    try {
      const db = (await connectDB).db('blog');
      db.collection('posts').insertOne(req.body);
      res.status(200).redirect(302, '/');
    } catch (e) {
      res.status(500).json('');
    }
  }
}
