const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./data.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT,
      role TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS keys (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      key TEXT UNIQUE,
      user_id INTEGER,
      expires_at INTEGER,
      active INTEGER DEFAULT 1,
      ip TEXT
    )
  `);
});

module.exports = db;
