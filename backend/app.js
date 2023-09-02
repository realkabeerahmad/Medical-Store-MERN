const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/auth");
const app = express();

const newLocal = "mongodb://127.0.0.1:27017/medicalStoreApp";
//Connecting mongodb

mongoose
	.connect(newLocal, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() => console.log("DB Connected"))
	.catch(() => console.log("Connection Failed With DB"));

//MiddelWare
app.use(cors());
app.use(express.json());
app.use("/api", authRoute);
const port = 5000;
app.listen(port, () => {
	console.log(`App is Running at ${port}`);
});
