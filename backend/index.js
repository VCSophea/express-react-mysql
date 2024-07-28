const express = require("express");

const app = express();
const port = 5000;
const db = require("./models");

app.use(express.json());

// Router
const postRouter = require("./routes/posts/Posts");
const user = require("./routes/users/Users");
app.use("/posts", postRouter);
app.use("/users", user);

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
