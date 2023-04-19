////////////////////////////////
// CREATE EXPRESS SERVER HERE //
////////////////////////////////
const express = require("express");
const app = express();

const cors = require("cors");
app.use(express.json()); // adding middleware to allow express to use JSON from our API endpoints
app.use(cors());

const userRoutes = require("./src/user/routes"); // importing the user sub-routes
const port = 5000;
// main route that leads to imported sub-routes
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port} ...`);
});
