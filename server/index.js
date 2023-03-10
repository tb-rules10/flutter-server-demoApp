const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require("./routes/userRoutes");
const {home} = require('./controllers/userController.js');
require("dotenv").config();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api",userRoutes);



const server = app.listen(process.env.PORT, () => {
    console.log("Server started on " + process.env.PORT);
})