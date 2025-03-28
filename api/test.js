export default function handler(req, res) {
    if (req.method === "GET") {
      console.log("API call received at /test endpoint");
      res.status(200).json({ message: "Server is alive" });
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }