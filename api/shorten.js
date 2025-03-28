import { nanoid } from "nanoid";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { url } = req.body;
    if (!url) {
      return res.status(400).json({ error: "URL is required" });
    }

    const shortId = nanoid(6);
    const shortUrl = `https://${req.headers.host}/${shortId}`;
    res.status(200).json({ shortUrl });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}