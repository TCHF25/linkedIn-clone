const User = require('../models/users.model')

const getAllUsers = async (req, res)=>{
    const user = req.user;
    res.json({user: user})
}

const getAdminAllUsers = async (req, res)=>{
    const user = req.user;
    res.json({user: user})
}

module.exports = {
    getAllUsers,
    getAdminAllUsers
}