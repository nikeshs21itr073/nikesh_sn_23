const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Configure MongoDB connection
mongoose.connect('mongodb://localhost:27017/product', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Define a schema for the booking data
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  
  carName: String,
  carPrice: String,
});

const Booking = mongoose.model('Booking', bookingSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define a route to handle form submissions
app.post('/api/bookings', (req, res) => {
  const {
    name,
    email,
    phone,
   
    carName,
    carPrice,
  } = req.body;

  const newBooking = new Booking({
    name,
    email,
    phone,
    
    carName,
    carPrice,
  });

  newBooking.save()
    .then(() => {
      res.status(201).json({ message: 'Booking saved successfully' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error saving booking' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
