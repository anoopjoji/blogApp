const express = require("express");
const usersModels = require("../models/usersModels");
const router = express.Router(); // Fix: use express.Router() instead of express.router

const bcrypt = require("bcryptjs");

hashPaswordGenerator = async (pass) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(pass, salt);
};

router.post("/signup", async (req, res) => {
  let { data } = { "data": req.body };
  let password = data.password;
  hashPaswordGenerator(password).then(
    (hashedPassword) => {
      console.log(hashedPassword);
      data.password = hashedPassword;
      console.log(data);

      let user = new signUpModels(data);
      let result = user.save();

      res.json({ status: "success" });
    }
  );
});

router.post("/signin", async (req, res) => {
  let input = req.body;
  let email = req.body.email;
  let data = await usersModels.findOne({ "email": email });

  if (!data) {
    return res.json({ status: "Invalid User" });
  }

  console.log(data);
  let dbPassword = data.password;
  let inputPassword = req.body.password;
  console.log(dbPassword);
  console.log(inputPassword);
  const match = await bcrypt.compare(inputPassword, dbPassword);
  if (!match) {
    return res.json({ status: "Invalid Password" });
  }
  res.json({
    status: "success",
  });
});

module.exports = router; // Fix: use router instead of express.router
