const express = require("express");
const routerU = express.Router();
const usc = require("./modules/modelU");

routerU.post("/user/insertion", async (req, res) => {
  console.log(req.body);
  try {
    const { uname, umail, upassword, phone } = req.body;

    function generateRandomString(length) {
      const charset = "abcdefghijklmnopqrstuv💕xyzABCDEFGHIJKLMNOPQRS❤️😁TUVWXYZ0123456789";
      let result = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset[randomIndex];
      }
      return result;
    }

    const random = generateRandomString(7);

    // Create a new user instance
    console.log("hiiiw");
    const user = new usc({
      umail: umail,
      upassword: upassword,
      phone: phone,
      uname: uname,
    });

    user
      .save()
      .then((savedUser) => {
        res.status(201).json({ message: "User created successfully", success: true, user: savedUser });
        console.log("User created successfully");
      })
      .catch((error) => {
        res.status(500).json({ message: "Server error", success: false });
        console.error("Error saving user:", error);
      });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
});

routerU.post("/user/search", async (req, res) => {
  const um = req.body.umail;
  const up = req.body.upassword;
  console.log(um);
  console.log(up);

  try {
    usc
      .findOne({
        umail: um,
        upassword: up,
      })
      .then((user) => {
        if (user) {
          console.log("yes");
          res.status(200).json({
            message: "Login success",
            success: true,
            user,
          });
          console.log("Login success");
        } else {
          console.log("no");
          res.status(401).json({ message: "Username or password incorrect", success: false });
          console.log("Username or password incorrect");
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "Server error", success: false });
        console.error("Error searching for user:", error);
      });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
});

module.exports = routerU;
