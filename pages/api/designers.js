import drive from "drive-db";

export default async (req, res) => {
  const db = await drive("1oj2FvM8IBdVhvfABSAqz1E67RIpQ0Uz11yujrY1sEh4");
  let sanitizeResult = db.filter(
    (item) => item.name != "" && item.show == "Yes"
  );

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(sanitizeResult));
};
