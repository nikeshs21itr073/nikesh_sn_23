const express = require("express");
const app = express.Router();
const Booking = require("./modules/bookS"); // Import the Booking model

app.post('/h', async (req, res) => {
  try {
    const newBooking = new Booking({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      fromAddress: req.body.fromAddress,
      toAddress: req.body.toAddress,
      numberOfPersons: req.body.numberOfPersons,
      numberOfLuggage: req.body.numberOfLuggage,
      journeyDate: req.body.journeyDate,
      journeyTime: req.body.journeyTime,
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking successful" });
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = app;
