import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import { PORT } from "./config.js";
//const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM productos");
  res.json(rows);
});

app.get("/call", async (req, res) => {
  const [result] = await pool.query("SELECT * FROM productos");
  res.json(result);
});

app.get("/crear", async (req, res) => {
  //crear
});

app.get("/eliminar", async (req, res) => {
  //eliminar
});

app.listen(PORT);
console.log("Server on port", PORT);
