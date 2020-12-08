const express = require("express");
const routes = require("../routes");
const morgan = require("morgan");
const celebrate = require("celebrate");
const { dateNow } = require("../middlewares");
import cors from "cors";

const PORT = process.env.PORT || 3006;

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(dateNow);

app.use("/api/v1", routes);

app.use(celebrate.errors());

module.exports = {
  app,
  PORT,
};
