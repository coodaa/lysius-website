import { getNavPlays } from "../../lib/getNavPlays";
import { withMiddleware } from "../../lib/apiMiddleware";

async function handler(req, res) {
  try {
    const plays = await getNavPlays();
    res.status(200).json(plays);
  } catch (error) {
    res.status(500).json({ error: "Error fetching plays" });
  }
}

export default withMiddleware(handler);
