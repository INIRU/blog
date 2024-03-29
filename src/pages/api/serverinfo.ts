import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    try {
      let result = '{"mainUrl": "main url", "imageUrl": "image url"}';

      if (result) {
        res.status(200).send(result);
      }
    } catch (e) {
      res.status(500).send('서버와의 연결을 실패했습니다.');
    }
  }
}
