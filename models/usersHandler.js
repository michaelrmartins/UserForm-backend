const database = require("./connection");

// Import Queries
const { queryGetAllUsers } = require("./queries/userQueries")

const getUsers = async () => {
    const [rows] = await database.execute(queryGetAllUsers);
    return rows;

};



module.exports = {
    getUsers
}