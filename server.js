const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('welcome');
});

app.get('/auth/google', function(req, res) {
  res.render('login', {
    user: {name: "John"}
  });
});

app.listen(3000);

app.use(function(req, res, next) {
  res.status(404).send('Sorry we cannot handle your request..');
});
