// import environmental variables
require('dotenv').config();

const express = require('express');
const app = express();
//const { json } = require('body-parser');
const Trip = require('./tripSchema');

//Middleware to receive json data
app.use(express.json());

//Route to POST a new trip
app.post('/trip', async (req, res) => {
  try {
    const name = req.body.name;
    const newTrip = new Trip({ name });
    const result = await newTrip.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ err });
  }
});

// Route to display all trips.
app.get('/trips', async (req, res) => {
  const showAllTrips = await Trip.find();
  // const showTrips = await showAllTrips.find();
  res.send(showAllTrips);
});

app.post('/expense', (req, res) => {});
app.get('/expenses', (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
