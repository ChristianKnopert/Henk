// pages/api/getImages.ts
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query; // Extract the folder name from the query parameters

  if (!folder || typeof folder !== 'string') {
    // Handle missing or invalid folder parameter
    return res.status(400).json({ error: 'Invalid folder name' });
  }

  const contentFolder = path.join(process.cwd(), 'public', folder);

  try {
    const files = fs.readdirSync(contentFolder);
    const filteredFiles = files.filter(file => file.endsWith('.jpg') || file.endsWith('.png'));

    res.status(200).json(filteredFiles);
  } catch (error) {
    res.status(500).json({ error: 'Error reading directory' });
  }
}
