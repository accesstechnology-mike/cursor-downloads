const { kv } = require("@vercel/kv");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Remove from subscribers list
    await kv.srem("subscribers", email);

    // Mark as inactive but keep record
    await kv.set(`subscriber:${email}`, {
      email,
      active: false,
      unsubscribedAt: new Date().toISOString(),
    });

    return res.status(200).json({ message: "Successfully unsubscribed!" });
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
