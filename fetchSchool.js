 // ✅ Haversine formula
    function getDistance(lat1, lng1, lat2, lng2) {
      const toRad = (deg) => (deg * Math.PI) / 180;
      const R = 6371;

      const dLat = toRad(lat2 - lat1);
      const dLng = toRad(lng2 - lng1);

      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) *
          Math.cos(toRad(lat2)) *
          Math.sin(dLng / 2) ** 2;

      return 2 * R * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

exports.fetchSchools = async (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLng = parseFloat(req.query.longitude);
  const db = require("./db");

  // ✅ Strong validation
  if (
    !Number.isFinite(userLat) ||
    !Number.isFinite(userLng) ||
    userLat < -90 || userLat > 90 ||
    userLng < -180 || userLng > 180
  ) {
    return res.status(400).json({
      error: "Valid latitude (-90 to 90) and longitude (-180 to 180) are required",
    });
  }

  try {
    const [rows] = await db.query("SELECT * FROM schools");

   

    // ✅ Filter + map
    const schoolsWithDistance = rows
      .filter(s => s.latitude !== null && s.longitude !== null)
      .map((school) => {
        const lat = Number(school.latitude);
        const lng = Number(school.longitude);

        return {
          ...school,
          distance: getDistance(userLat, userLng, lat, lng),
        };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(schoolsWithDistance);
  } catch (err) {
    console.error("Error fetching schools:", err);
    res.status(500).json({ error: "Failed to fetch schools" });
  }
};