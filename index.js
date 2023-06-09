const express = require("express");
const cors = require("cors");
const fileRoutes = require("./routes/routes");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

require("./database")();

app.use(bodyParser.json());

app.use("/api", fileRoutes.routes);

app.listen(port, () =>
  console.log(`server is listening on url http://localhost:${port}`)
);