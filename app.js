const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const port = 4000;

const name = process.env.NAME || 'DefaultName';

app.use(cors()); // Add this line to enable CORS

app.get('/', (req, res) => {
  res.send(`Hello ${name}`);
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
