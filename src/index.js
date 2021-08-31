const express = require('express')
const mongoose = require('mongoose');
const MONGO_INITDB_ROOT_PASSWORD =process.env.MONGO_INITDB_ROOT_PASSWORD
const MONGO_INITDB_ROOT_USERNAME =process.env.MONGO_INITDB_ROOT_USERNAME
const app = express()
 const port = process.env.WEBSITE_PORT || 8000
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port)
const mongoDB= `mongodb://${MONGO_INITDB_ROOT_USERNAME}:${MONGO_INITDB_ROOT_PASSWORD}@0.0.0.0:27017/db_tests`
console.log('connet mongo db',mongoDB)
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
console.log(`Run import ${port}`)