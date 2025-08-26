import { scrapeTiles } from "../../lib/scrape";

export default async function handler(req, res) {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: "Missing ?url=" });

  try {
    const data = await scrapeTiles(url);
    res.status(200).json({ url, data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
