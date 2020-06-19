import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({hello: 'es6'});
});

app.listen(3000);