const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  fromAddress: {
    type: String,
    required: true,
  },
  toAddress: {
    type: String,
    required: true,
  },
  numberOfPersons: {
    type: String,
    required: true,
  },
  numberOfLuggage: {
    type: String,
    required: true,
  },
  journeyDate: {
    type: Date,
    required: true,
  },
  journeyTime: {
    type: String,
    required: true,
  },
  // Add more fields as needed
});

const User = mongoose.model('books', userSchema);

module.exports = User;