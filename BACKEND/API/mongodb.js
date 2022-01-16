var mongoose = require('mongoose');
require('dotenv').config();

var username = process.env.DB_USERNAME || 'adminrichiiie94';
var password = process.env.DB_PASSWORD || 'adminrichiiie94';
var db = process.env.DB || 'trial';

var DB_ref = mongoose.createConnection(
    'mongodb+srv://' + username + ':' + password + '@' + db + '.xgswq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)

.on('error', function(err){
  if(err) {
    console.error('Error connecting to MongoDB.', err.message);
  };
})
.once('open', function callback () {
  console.info(`Mongo DB connected successfully ${db}`);
}); 

module.exports = DB_ref;