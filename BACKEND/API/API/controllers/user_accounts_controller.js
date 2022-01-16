const user_accounts = require('../models/user_accounts_model');
const moment = require('moment-timezone');

const success_message = 'Successed!';
const error_message = 'Error!';
const exist_message = 'Already Existing!';

exports.createUserAccount = async (req, res) => {
    try {
        const checkExisting = await user_accounts.aggregate([
            {
                $match: {
                    $or: [
                        {
                            username: req.body['username'],
                        },
                        {
                            email: req.body['email'],
                        }
                    ],
                },
            },
        ]).exec();

        if (checkExisting.length > 0) {
            return res.json({
                statusCode: 0,
                message: 'Usermame/Email ' + exist_message,
            });
        }
        
        const result = user_accounts.create(req.body);

        if (result) {
            res.json({
                statusCode: 1,
                message: 'Create User ' + success_message,
            });
        }
    } catch(err) {
        res.json({
            statusCode: 0,
            message: error.message
        });
    }
}

exports.getAllUserAccountList = async (req, res) => {
    // req.body = {
    //     site: Date,
    //     company_id: Date,
    // }
    try {
        let condition = {};

        if ('condition' in req.body) {
            condition = req.body['condition'];  
        }

        const result = await Promise.all([
            user_accounts.aggregate([
                {
                    $match: condition,
                }
            ]).exec(),
        ]);

        if (result) {
            let total = 0;

            if (result[0].length > 0) {
                total = result[0].length;
            }

            res.json({
                statusCode: 1,
                total: total,
                data: result[0],
            });
        }
    } catch(err) {
        res.json({
            statusCode: 0, 
            message: error.message
        });
    }
}