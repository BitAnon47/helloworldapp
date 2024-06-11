const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1><p>Name: [Muhammad Akash Zaheer]</p><p>Enrollment Number: [01-135202-045]</p>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
