const express = require('express');
const router = express.Router();

const user_accounts_route = require('./routes/user_accounts_route');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'API' });
});

router.use('/user-accounts', user_accounts_route);

module.exports = router;
