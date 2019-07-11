// require modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { url } = require('./config/mongodb-config');
const { local } = require('./config/app-config');
const bookRoutes = require('./src/routes/book-route');

const port = process.env.PORT || local.port;
const app = express();

// connect to mongodb
mongoose.connect(url, { useNewUrlParser: true });

// body-parser boiler plate
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use(bookRoutes);

// home route
app.get('/', (req, res) => {
  res.send('Welcome to RESTFul APIs build path');
});

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
