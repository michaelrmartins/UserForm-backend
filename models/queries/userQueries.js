const queryGetAllUsers = `
SELECT * 
    FROM new_users.users u 
    LEFT JOIN new_users.roles r ON u.ID_ROLE = r.ID

`;  // End

const queryRegNewUser = `
-- arquivo queries.sql
INSERT INTO users (USERNAME, BIRTHDATE, CPF, ID_ROLE)
VALUES (?, ?, ?, ?);

`

module.exports = {
    queryGetAllUsers,
    queryRegNewUser,
}