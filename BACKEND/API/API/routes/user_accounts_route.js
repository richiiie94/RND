var express = require('express');
var router = express.Router();
var controller = require('../controllers/user_accounts_controller');

router.use('/get-user-account', controller.getUserAccount);
router.use('/create-user-account', controller.createUserAccount);
router.use('/update-user-account', controller.updateUserAccount);

module.exports = router;