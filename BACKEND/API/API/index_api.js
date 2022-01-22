const express = require('express');
const router = express.Router();

const success_message = 'Success!';
const error_message = 'Error!';
const exist_message = 'Already Existing!';

const statusCodeError = 0;
const statusCodeSuccess = 1;

const user_accounts_route = require('./routes/user_accounts_route');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'API' });
});

router.use('/user-accounts', user_accounts_route);

module.exports = router;
