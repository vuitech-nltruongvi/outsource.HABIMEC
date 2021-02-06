// Call in installed dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const mainRoutes = require('./server/routes/product');
const cors = require('cors');

// set up express app
const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(logger('dev'));
app.use(cors());

// set up mongoose
mongoose.connect("mongodb+srv://nltruongvi:TjmWjm824594@cluster0.vzakd.mongodb.net/cypress-monitor?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.log('Error connecting to database');
  });

// set up port number
const port = 5035;

// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Project width nodejs and express',
  });
});

app.use('/api/', mainRoutes)

app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});