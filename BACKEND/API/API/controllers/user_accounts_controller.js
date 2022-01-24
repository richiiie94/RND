const user_accounts = require('../models/user_accounts_model');
const { globalVariables } = require('../global_variables');
const moment = require('moment-timezone');

exports.createUserAccount = async (req, res) => {
    try {
        console.log(globalVariables);
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
                statusCode: globalVariables['statusCodeError'],
                message: `Username/Email ${globalVariables['exist_message']}`,
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
                statusCode: globalVariables['statusCodeSuccess'],
                data: result,
                message: `Create User ${globalVariables['success_message']}`,
            });
        }
    } catch(err) {
        res.json({
            statusCode: globalVariables['statusCodeError'],
            message: err.message
        });
    }
}

exports.getUserAccount = async (req, res) => {
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
                    $sort: sort,
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
                statusCode: globalVariables['statusCodeSuccess'],
                total: total,
                data: result[1],
            });
        }
    } catch(err) {
        res.json({
            statusCode: globalVariables['statusCodeError'], 
            message: err.message
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
                statusCode: globalVariables['statusCodeSuccess'],
                data: result,
                message: `Update User ${globalVariables['success_message']}`,
            });
        }
    } catch (err) {
        res.json({
            statusCode: globalVariables['statusCodeError'],
            message: err.message
        });
    }
}