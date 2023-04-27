/**
 * Next.js API route support: https://nextjs.org/docs/api-routes/introduction
 * @param req {import('next').NextApiRequest}
 * @param res {import('next').NextApiResponse}
 */

//////------POST------///////

export default async function handler(req, res) {
  //res.status(200).json({name:req.body})
  const response = await fetch(
    "https://ihjawproqviyqyssqucs.supabase.co/rest/v1/charlie-tango-case",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.SUPABASE_KEY,
        Prefer: "return=representation",
      },
      body: JSON.stringify(req.body),
    }
  ).then((res) => res.json());
  console.log({ response });

  return res.status(200).json({ response });
}
