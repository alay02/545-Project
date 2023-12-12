const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "TasteOfTheTown"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express();
const port = 3000;


app.use(cors());
app.use(bodyParser.json());

// TESTING
// con.query('SELECT 1 + 1 AS solution', (err, results, fields) => {
//   if (err) throw err;
//   console.log('Test query result: ', results[0].solution); // Should log 2
// });


// GET endpoint for restaurants
app.get('/api/restaurants', (req, res) => {
  con.query("SELECT * FROM restaurant", (err, results, fields) => {
      if (err) throw err;
      res.json(results);
  });
});

// GET endpoint for reviews
app.get('/api/reviews', (req, res) => {
  con.query("SELECT * FROM review NATURAL JOIN restaurant", (err, results, fields) => {
      if (err) throw err;
      res.json(results);
  });
});

// POST endpoint for submitting a review
app.post('/api/reviews', (req, res) => {
  const newReview = req.body;
  con.query("INSERT INTO review SET ?", newReview, (err, result) => {
      if (err) throw err;
      res.status(201).send(`Review added with ID: ${result.insertId}`);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});