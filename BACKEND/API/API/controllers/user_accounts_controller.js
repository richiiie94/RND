const user_accounts = require('../models/user_accounts_model');
const index_api = require('../index_api');
const moment = require('moment-timezone');

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
                statusCode: index_api.statusCodeError,
                message: `Usermame/Email ${index_api.exist_message}`,
            });
        }

        const dataInject = {
            ...req.body,
            status: 1,
            created_time: moment(),
            last_updated_time: moment(),
        };
        
        const result = user_accounts.create(dataInject);

        if (result) {
            res.json({
                statusCode: index_api.statusCodeSuccess,
                data: result,
                message: `Create User ${index_api.success_message}`,
            });
        }
    } catch(err) {
        res.json({
            statusCode: index_api.statusCodeError,
            message: error.message
        });
    }
}

exports.getUserAccount = async (req, res) => {
    // req.body = {
    //     site: Date,
    //     company_id: Date,
    // }
    try {
        let condition = {};
        let skip = 0;
        let limit = 1000;
        let sort = {
            name: 1,
        };

        if ('condition' in req.body) {
            condition = req.body['condition'];  
        }

        if ('skip' in req.body) {
            skip = req.body['skip'];
        }

        if ('limit' in req.body) {
            limit = req.body['limit'];
        }

        if ('sort' in req.body) {
            sort = req.body['sort'];
        }

        condition['status'] = 1;

        const result = await Promise.all([
            //! ALL DATA
            user_accounts.aggregate([
                {
                    $match: condition,
                },
            ]).exec(),

            user_accounts.aggregate([
                {
                    $match: condition,
                },
                {
                    $skip: skip,
                },
                {
                    $limit: limit,
                },
            ]).exec(),
        ]);

        if (result) {
            let total = 0;

            if (result[0].length > 0) {
                total = result[0].length;
            }

            res.json({
                statusCode: index_api.statusCodeSuccess,
                total: total,
                data: result[1],
            });
        }
    } catch(err) {
        res.json({
            statusCode: index_api.statusCodeError, 
            message: error.message
        });
    }
}

exports.updateUserAccount = async (req, res) => {
    try {
        const condition = req.body['condition'];

        const update = {
            ...req.body['update'],
            last_updated_time: moment(),
        }

        const result = user_accounts.updateOne(condition, update, {new: true});

        if (result) {
            res.json({
                statusCode: index_api.statusCodeSuccess,
                data: result,
                message: `Update User ${index_api.success_message}`,
            });
        }
    } catch (err) {
        res.json({
            statusCode: index_api.statusCodeError,
            message: error.message
        });
    }
}