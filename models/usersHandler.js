const database = require("./connection");

// Import Queries
const { queryGetAllUsers, queryRegNewUser,} = require("./queries/userQueries")

// Get Users
const getUsers = async () => {
    const [rows] = await database.execute(queryGetAllUsers);
    return rows;
};

// Register new User
const regUser = async (userData) => {
    const { username, birthdate, cpf, id_role} = userData;

    const [result] = await database.execute(queryRegNewUser,
        [username, birthdate, cpf, id_role])
        return result;
}

// Exports >>>> 
module.exports = {
    getUsers, 
    regUser,
}