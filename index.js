const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passpost");
const passport = require("passport");
const authRoute = require("./routes/api");
const app = express();

app.use(
  cookieSession({ name: "session", keys: ["chiba"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/api", authRoute);

app.listen("5000", () => {
  console.log("server is running on port 5000");
});