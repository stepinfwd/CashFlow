

const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const mongoURI=process.env.mongoURI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err))

app.get('/', (req, res) => {
  res.send('Hello World!xx')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
