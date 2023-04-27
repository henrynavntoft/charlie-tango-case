export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const id = req.query.id;

      if (!id) {
        throw new Error("ID is required");
      }

      const response = await fetch(
        `https://ihjawproqviyqyssqucs.supabase.co/rest/v1/charlie-tango-case?id=eq.${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.SUPABASE_KEY,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error deleting person");
      }

      return res.status(200).json({ message: "Person deleted successfully" });
    } catch (error) {
      console.error("Error deleting person:", error.message);
      return res.status(500).json({ error: "Error deleting person" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
