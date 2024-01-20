const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Crează conexiunea cu baza de date SQLite
const db = new sqlite3.Database('db/rest2.db');

// Rute pentru obținerea datelor din tabela Restaurants
app.get('/api/restaurants', (req, res) => {
  const query = 'SELECT * FROM Restaurants';

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.json(rows);
  });
});

// Ascultă pe portul specificat
app.listen(port, () => {
  console.log(`Serverul rulează la adresa http://localhost:${port}`);
});
