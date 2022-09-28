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
  try {
    const showAllTrips = await Trip.find();

    res.status(200).json({ trips: showAllTrips });
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post('/expense', (req, res) => {});
app.get('/expenses', (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
