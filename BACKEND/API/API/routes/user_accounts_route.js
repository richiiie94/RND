var express = require('express');
var router = express.Router();
var controller = require('../controllers/user_accounts_controller');

router.use("/get-all-user-account-list", controller.getAllUserAccountList);
router.use("/create-user-account", controller.createUserAccount);

module.exports = router;