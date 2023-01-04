// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from './data.json'
export default function handler(req, res) {
  const datajs = data
  return res.json(datajs)
}
