exports.addSchool = async (req, res) => {
    const db = require("./db");
  const { name, address  , lattitude , longitude} = req.body;
  if (!name || !address  || !lattitude || !longitude) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (typeof name !== "string" || typeof address !== "string" || typeof lattitude !== "number" || typeof longitude !== "number") {
    return res.status(400).json({ error: "Invalid data types" });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO schools (name, address, lattitude, longitude) VALUES (?, ?, ?, ?)",
      [name, address, lattitude, longitude]
    );
    res.status(201).json({ id: result.insertId, name, address, lattitude, longitude });
  } catch (err) {
    console.error("Error adding school:", err);
    res.status(500).json({ error: "Failed to add school" });
  }
}