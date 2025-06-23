const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

// Set up SQLite database
const db = new sqlite3.Database("./data.db", (err) => {
  if (err) return console.error(err.message);
  console.log("Connected to SQLite database.");
});

// Create a table for "items"
db.run(`CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT
)`);

// 1. GET all items
app.get("/api/items", (req, res) => {
  db.all("SELECT * FROM items", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// 2. GET one item
app.get("/api/items/:id", (req, res) => {
  db.get("SELECT * FROM items WHERE id = ?", [req.params.id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: "Item not found" });
    res.json(row);
  });
});

// 3. POST create item
app.post("/api/items", (req, res) => {
  const { name, description } = req.body;
  db.run(
    "INSERT INTO items (name, description) VALUES (?, ?)",
    [name, description],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID, name, description });
    },
  );
});

// 4. PUT update item
app.put("/api/items/:id", (req, res) => {
  const { name, description } = req.body;
  db.run(
    "UPDATE items SET name = ?, description = ? WHERE id = ?",
    [name, description, req.params.id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0)
        return res.status(404).json({ error: "Item not found" });
      res.json({ id: req.params.id, name, description });
    },
  );
});

// 5. DELETE item
app.delete("/api/items/:id", (req, res) => {
  db.run("DELETE FROM items WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0)
      return res.status(404).json({ error: "Item not found" });
    res.json({ message: "Item deleted" });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.db = db;
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}
module.exports = app;
