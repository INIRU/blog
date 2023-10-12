import type { NextApiRequest, NextApiResponse } from 'next';

import { connectDB } from '@/modules/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'POST') {
    const data: { [key: string]: string | Date | number } = JSON.parse(
      req.body
    );
    Object.keys(data).forEach((key) => {
      if (data[key] == '') {
        return res.status(400).json('');
      }
    });

    data.views = 0;
    try {
      const db = (await connectDB).db('blog');
      db.collection('posts').insertOne(data);
      res.status(200).json('');
    } catch (e) {
      res.status(500).json('');
    }
  }
}
