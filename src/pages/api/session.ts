// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  name: string
}

let calls = 0

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('session api called', Math.random() * 10)

  res.status(200).json({ id: 123, name: 'John Doe' })
}
