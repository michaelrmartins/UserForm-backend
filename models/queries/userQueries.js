const queryGetAllUsers = `
SELECT * 
    FROM new_users.users u 
    LEFT JOIN new_users.roles r ON u.ID_ROLE = r.ID

`;  // End





module.exports = {
queryGetAllUsers
}