const express = require('express')
const {DB} = require('./config/db')
const {userRouter, postRouter} = require('./routes/index')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(cors())
// MIDDLEWARE
app.use(express.json())

// DATABSE
DB();

// ROUTES
app.use('/users', userRouter)
app.use('/posts', postRouter)

// PORT
const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log("App listening on Port: ",PORT )
})