const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require('multer');
const cloudinary = require('cloudinary');

// Load environment variables
dotenv.config();
const port = process.env.PORT;

////////------ Cloudinary Configuration -------//////////
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
    origin: 'http://13.201.131.89:3000', // Replace with your frontend's domain or '*'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

//////----- Connection with Database -----//////
require("./database/conn");

////////-------- Routes --------/////////
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//////////-------- API ---------/////////
app.use("/api", userRoutes);
app.use("/api", blogRoutes);

//////--------- Test Endpoints --------//////
app.get("/", (req, res) => {
    res.send("Express : backend");
});

app.post("/", (req, res) => {
    console.log(JSON.stringify(req.body, 0, 2));
    res.status(200).send(req.body);
});

//////--------- Start Server --------//////
app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});
