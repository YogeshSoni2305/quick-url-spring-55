export default function handler(req, res) {
    if (req.method === "GET") {
      const { shortId } = req.query; // Vercel passes params as query for dynamic routes
      // Fetch originalUrl from a database instead of urlMap
      const originalUrl = "https://example.com"; // Placeholder
      if (originalUrl) {
        res.redirect(originalUrl);
      } else {
        res.status(404).json({ error: "URL not found" });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }
  
  export const config = {
    api: {
      path: "/:shortId", // Dynamic route for redirects
    },
  };