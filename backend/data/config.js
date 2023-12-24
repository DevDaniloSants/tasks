const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost/to-do-list')
  .then(() => console.log('conectado ao banco de dados'))
  .catch((error) => console.log(error));
