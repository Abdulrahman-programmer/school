exports.addSchool = async (req, res) => {
    const db = require("./db");
  const { name, address  , latitude , longitude} = req.body;
  if (!name || !address  || !latitude || !longitude) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (typeof name !== "string" || typeof address !== "string" || typeof latitude !== "number" || typeof longitude !== "number") {
    return res.status(400).json({ error: "Invalid data types" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, latitude, longitude]
    );
    res.status(201).json({ id: result.insertId, name, address, latitude, longitude });
  } catch (err) {
    console.error("Error adding school:", err);
    res.status(500).json({ error: "Failed to add school" });
  }
}