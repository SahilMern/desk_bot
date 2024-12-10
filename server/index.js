console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");
require("dotenv").config()
const cors = require("cors")
const express = require('express')
const app = express()
const port = 2222;
app.use(cors());
app.use(express.json())

require("./config/database")

// user Routes 
const userRoutes = require("./Router/user.Routes")
app.use("/api/v1/user", userRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))