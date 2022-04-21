// PACKAGES
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const swaggerUi = require('swagger-ui-express'); 

// MIDDLEWARE
const Routes = require("./routes/index");
const app = express();
const port = process.env.port || 5000;
const staticSite = path.join(__dirname, "/public");
const swaggerDocument = require('./helpers/swagger.json'); 
// const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
const http = require("http").Server(app);

// APPLICATION MIDDLEWARES
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static(staticSite));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/", Routes);

// wild route
app.use((req, res) => {
  res.send("Page not found");
});

// ERROR MIDDLEWARE
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  console.log(
    "Error Message: ",
    error.message,
    " Technical Issue ErrorRef Code: ",
    error.code
  );
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred!" });
});

// MONGODB CONNECTION
mongoose
  .connect(process.env.MONGODBCONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongo db connected");
  })
  .catch((err) => console.log("can not connect to Mongo db" + err));

app.listen(port, () => console.log(`Example app listening on port ${port}`));