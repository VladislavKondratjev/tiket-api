const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { router } = require("./routes");
const cors = require("cors");
const errorHandler = require("./middlewares/error-handler");

const app = express();

app.use(bodyParser.json());

app.use(router);
app.use(cors());
app.use(errorHandler);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${3000}`);
});

mongoose.connect("mongodb://localhost:27017/mydb", {
  useNewUrlParser: true,
  autoIndex: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
