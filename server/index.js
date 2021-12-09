const express = require("express");
const { initialize } = require("express-openapi");

const apiDoc = require("./src/api/api-doc");
const v1AccountService = require("./src/services/accountService");

const PORT = process.env.PORT || 8080;

const app = express();

initialize({
  app,
  apiDoc,
  dependencies: {
    accountService: v1AccountService,
  },
  paths: "./src/api/paths",
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
