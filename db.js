const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fatihguzel:b2ak0w17QonCPg5k@atlascluster.xl0lowm.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

module.exports = db;
