import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("Learning backend");
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});