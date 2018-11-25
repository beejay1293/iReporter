const express = require('express');

const app = express();

const bodyParser = require('body-parser');


const routes = require('./routes/api');

app.use(bodyParser.json());
app.use('/api/v1', routes);


app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json(
    {
      status: error.status,
      error: error.message,
    }
  );
});


app.listen(3000);
