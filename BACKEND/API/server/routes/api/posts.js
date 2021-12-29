const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// !GET POST
router.get('/', (req, res) => {
    res.send('HELLO');
})

// !ADD POST

// !DELETE POST

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://adminrichiiie94:ardGuna94@trial.xgswq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("trial").collection("user_account");
  // perform actions on the collection object
  client.close();
});

module.exports = router;