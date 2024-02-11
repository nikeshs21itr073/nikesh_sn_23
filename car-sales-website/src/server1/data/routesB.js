const express=require("express");
const app=express.Router();
const mo=require( "./modules/bookS");
app.post('/h', async (req, res) => {
    try {
      const newUser = new mo({
        name: req.body.name,
        umail: req.body.umail,
        phone: req.body.phone,
        
        carName:req.body.carName,
        carPrice:req.body.carPrice,
         // Remember to hash and salt passwords before storing
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: 'Booking  successfull' });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  module.exports = app;