const express = require('express');
const cors = require('cors');
const app = express();

const checklistRouter = require('./src/routes/checklist');

// mongoose
require('./data/config');

// middlewares
app.use(cors());
app.use(express.json());
app.use('/checklist', checklistRouter);

app.listen(3000, () => {
  console.log('servidor foi iniciado');
});
