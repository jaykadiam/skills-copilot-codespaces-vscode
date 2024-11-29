// Create web server
// Create a route for POST /api/comments
// Create a route for GET /api/comments

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let comments = [];

app.post('/api/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.status(201).send();
});

app.get('/api/comments', (req, res) => {
  res.status(200).send(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});