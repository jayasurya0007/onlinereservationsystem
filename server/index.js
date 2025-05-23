const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
const authRoute = require("./route/auth");
const courseRoute = require("./route/course-route");
const cors = require("cors");
const passport = require("passport");
require("./config/passport")(passport);

mongoose
  .connect(process.env.DB_CLUSTER, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to Mongo Atlas");
  })
  .catch((e) => {
    console.log(e);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://onlinereservationsystem.vercel.app",  // Replace with your frontend's Render URL
    credentials: true,
  })
);



app.use("/api/user", authRoute);
//app.use(passport.initialize());
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRoute
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

