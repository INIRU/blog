import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/modules/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    try {
      const db = (await connectDB).db('blog');
      let result = await db.collection('posts').find().toArray();

      if (result) {
        res.status(200).send(result);
      }
    } catch (e) {
      res.status(500).send('서버와의 연결을 실패했습니다.');
    }
  }
}
