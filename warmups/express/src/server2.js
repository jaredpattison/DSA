'use strict';

const express = require('express');
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use(express.static(`${__dirname}/../public`));

app.use(express.json());

app.get('/', (req,res) => {
  res.send('<h1>Suppp?</h1>');
});

app.post('/save', (req,res) =>  {
  res.json(req.body);
});

app.get('/err', (req,res,next) => {
  next('error');
});

app.get('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Couldn\'t find that';
  res.render('not-found', {request:req});
});

app.use((err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
  res.render('error', {request:req, error:err});
});

module.exports = {
  server: app,
  start: () => {
    const PORT = process.env.port || 3000;
    app.listen(PORT, () => console.log(`Server up on port ${PORT}`));
  },
};