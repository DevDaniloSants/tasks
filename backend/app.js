// dotenv
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const port = process.env.PORT;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// DB connection
require('./data/config');

// routes
const router = require('./src/routes/Router.js');
app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
