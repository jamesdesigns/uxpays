import { NextApiRequest, NextApiResponse } from 'next';

// Simulated in-memory store (for demonstration purposes)
let views: Record<string, number> = {};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Project slug is required and must be a string' });
  }

  if (req.method === 'GET') {
    // Get the view count for the specific project
    const projectViews = views[slug] || 0;
    return res.status(200).json({ views: projectViews });
  } else if (req.method === 'POST') {
    // Increment the view count for the specific project
    views[slug] = (views[slug] || 0) + 1;
    return res.status(200).json({ views: views[slug] });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
