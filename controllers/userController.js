// Controller - User

const userHandler = require('../models/usersHandler')

// Get Users Controller
const getUsers = async (req, resp ) => {
    console.log("Controller - getUsers executed");
    users = await userHandler.getUsers()
    return resp.status(200).json({users})
}


// Register Users Controller
const regUser = async (req, resp ) => {
        console.log("I am a Controller...")

       try{ 
        console.log("let's try execute this... ")
        const { USERNAME, BIRTHDATE, CPF, ID_ROLE } = req.body;
        const result = await userHandler.regUser({
            username: USERNAME,
            birthdate: BIRTHDATE,
            cpf: CPF,  
            id_role: ID_ROLE          
        });
        return resp.status(201).json({message: `message:User Registred Successfully`, result})
    } catch(error) {
        console.log("Controller - regUse error:", error);
        return resp.status(500).json({message: "Error Registring user", error})
    } // try finally


}; // end regUser

// Exports
module.exports = {
    getUsers,
    regUser,
}