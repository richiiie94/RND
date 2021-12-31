const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

const database = process.env.DB || 'trial';

exports.loadPostCollection = async data => {
    console.log(data);
    const uri = "mongodb+srv://adminrichiiie94:ardGuna94@trial.xgswq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = await mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db(database).collection(data['collection']);
        // perform actions on the collection object
        client.close();
        
        return collection;
    });
}

module.exports = router;