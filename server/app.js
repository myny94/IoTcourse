
const express = require('express')
const cors = require('cors')

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')

const logger = require('./utils/logger')
const config = require('./utils/config')
const middleware = require('./utils/middleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)

// if (process.env.NODE_ENV === 'test') {
const testingRouter = require('./controllers/reset-for-testing')
app.use('/api/testing', testingRouter)
// }

app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

module.exports = app
