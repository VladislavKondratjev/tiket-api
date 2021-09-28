const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const { router } = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${3000}`);
});

mongoose.connect("mongodb://localhost:27017/mydb", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
