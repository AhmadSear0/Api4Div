export default async function handler(req, res) {
  const { text } = req.query;
  if (!text) return res.status(400).send("No text provided");

  try {
    const fetchRes = await fetch(`https://api4dev.ir/ai/?text=${encodeURIComponent(text)}`);
    const data = await fetchRes.text();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("Error contacting API");
  }
}
