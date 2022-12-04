const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/equidad-genero-db',
  {

  }
)   .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));


