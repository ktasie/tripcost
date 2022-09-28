const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb://localhost:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`
  )
  .then(() => console.log('database connection successful'))
  .catch((e) => console.log('Cannot connect to the database'));

const tripSchema = new mongoose.Schema({
  name: String,
});

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;
