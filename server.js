// import environmental variables
require('dotenv').config();

const express = require('express');
const app = express();

const Trip = require('./tripSchema');
const Expense = require('./expenseSchema');

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

// Add an expense for a trip
app.post('/expense', async (req, res) => {
  try {
    const { trip, date, amount, category, description } = req.body;

    const expense = new Expense({
      trip,
      date,
      amount,
      category,
      description,
    });
    await expense.save();
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json(err);
  }
});
app.get('/expenses', (req, res) => {});

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
