require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const {dbConnection} = require('./db/index')
const router = require('./api/routes')

dbConnection();

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)


app.listen(process.env.PORT,() => { 
    console.log("Servidor Corriendo en Puerto " + process.env.PORT);});