const express = require("express");

const app = express();
const port = 5000;
const db = require("./models");

db.sequelize
  .sync()
  .then((result) => {
    // Start the server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello !!");
});
