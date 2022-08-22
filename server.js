const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const router = require("./route/routes")
const app = express();
require("dotenv").config()

//middleware

app.use(cors())
app.use(express.json())


//mongoose
mongoose.connect(process.env.MONGODB_KEY, (err, data) => {
    if (err) throw err;
    console.log("database connected");
})

//routes
app.use(router)

//port
const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`server is running on ${port}`);
})