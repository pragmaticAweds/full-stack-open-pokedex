const express = require("express");
const app = express();

// get the port from env variable

app.get("/version", (req, res) => {
  res.send("1"); // change this string to ensure a new version deployed
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  this_causes_error;

  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
