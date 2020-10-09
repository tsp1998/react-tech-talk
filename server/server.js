const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express();
app.use(express.json())
app.use(morgan('dev'))

const MONGO_URL = 'mongodb://localhost:27017/ReactTechTalk'
console.log('Waiting for Database Connection');
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) return console.log('Database Connection Fail: ', err);
  console.log('Database Connection Success');
})

app.get("/", (req, res) => res.send('Welcome to Tech Talk API'))
// app.use('/api/users', require('./routes/user.routes'))
app.use('/api/products', require('./routes/product.routes'))

app.use((err, req, res, next) => res.json({ status: 'error', error: err.message || 'Something Wrong with Server' }))

app.listen(5000, () => console.log('Server is listening on port 5000'));