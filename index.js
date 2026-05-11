const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let items = [];

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const item = { id: Date.now(), ...req.body };
  items.push(item);
  res.status(201).json(item);
});

app.delete('/items/:id', (req, res) => {
  items = items.filter(i => i.id !== Number(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
