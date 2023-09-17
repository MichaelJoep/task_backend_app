const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const db_connect = require("./db/database");
const allRoutes = require("./routes/sectors")


dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;

db_connect();


//middlewares
app.use(cors({
    origin: ['http://localhost:5000'],
    method: ["POST", "GET", "PUT"],
    credentials: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));


//Routes
app.use("/api/v1", allRoutes);




//Routes middlewares


app.listen(PORT, () => {
    console.log(`Server is listening to http://localhost:${PORT}`);
})