const express = require("express");

const { handleGetBlockNumber } = require("./src/api/index");

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", handleGetBlockNumber);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
