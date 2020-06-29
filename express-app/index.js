/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const app = express();

app.use(express.static("../dist"));

app.use((req, res) => res.redirect("/"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
