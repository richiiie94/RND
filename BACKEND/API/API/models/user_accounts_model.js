var mongoose = require('mongoose');

const db = require('../../mongodb');

const Schema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String, // hash
    contact_no: String,
    token: String,
    status: Number, // 0: disabled, 1: active/approved, 2: not approved
    default_site: String,
    created_time: Date,
    last_updated_time: Date,
},
    { collection: 'user_accounts' }
);

Schema.index({ name: 'text', email: 'text', username: 'text' })

module.exports = db.model('user_accounts', Schema);