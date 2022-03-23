const express = require("express");
const app = express();
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.get("/", (req,res) => {
  res.send("Hello World");
});

app.get("/category", (req,res) => {
    res.send(hii);
});

app.listen(PORT, () => {
    console.log(`Example app is listing on port http://localhost:${PORT}`);
});