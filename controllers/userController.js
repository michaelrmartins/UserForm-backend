// Controller - User

const userHandler = require('../models/usersHandler')

// Get Users Controller
const getUsers = async (req, resp ) => {
    console.log("Controller - getUsers executed");
    users = await userHandler.getUsers()
    return resp.status(200).json({users})
}


// Exports
module.exports = {
    getUsers
}