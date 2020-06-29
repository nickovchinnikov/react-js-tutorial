/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();
const puppeteerRenderer = require("puppeteer-renderer-middleware");
app.use(
  puppeteerRenderer({
    url: "http://localhost:3333/renderer",
  })
);

app.use(express.static("../dist"));

app.use((req, res) => res.redirect("/"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
