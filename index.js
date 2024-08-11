"use strict"
/* -------------------------------------------------------------------------- */
/*                           EXPRESS - PERSONNEL API                          */
/* -------------------------------------------------------------------------- */

/* -------------------------------- requires -------------------------------- */
const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 8000

require('express-async-errors')



/* ------------------------------- body parser ------------------------------ */
app.use(express.json())

/* ------------------------------ dbConnection ------------------------------ */
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ----------------------------- cookie-session ----------------------------- */
app.use(require('cookie-session')({
  secret: process.env.SECRET_KEY // hocaya sor
}))


/* --------------------------------- routes --------------------------------- */
app.use('/departments', require('./src/routes/department'))
app.use('/personnels', require('./src/routes/personnel'))
app.use('/auth', require('./src/routes/auth'))
app.use('/token', require('./src/routes/token'))

/* ------------------------------ errorHandler ------------------------------ */
app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => console.log('Listening on http:/127.0.0.1:' + PORT))

/* ---------------------------------- sync ---------------------------------- */
// require('./src/helpers/sync')()
