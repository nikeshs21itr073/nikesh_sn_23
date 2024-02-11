const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  umail: {
    type: String,
    required: true,
   
  },
  phone: {
    type: String,
    required: true,
  },
  carName: {
    type: String,
    required: true,
  },
  carPrice: {
    type: String,
    required: true,
  },
  
});

const User = mongoose.model('books', userSchema);

module.exports = User;
