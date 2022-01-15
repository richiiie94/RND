const db = require("../models");
const UserAccount = db.user_account;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  try {
    UserAccount.create(req.body);
    
  } catch(error) {
    res.status(500).json({
        message: err.message || "Some error occurred while retrieving tutorials."
    });
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
    try {
        let condition = {};
    
        if (req.body['condition']) {
            condition = req.body['condition'];
        }
    
        const result = await UserAccount.aggregate([
            {
                $match: condition,
            },
        ])
        .exec();

        res.json({
            data: result,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving tutorials."
        });
    }
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};