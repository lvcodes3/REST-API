/////////////////////////////////////
// SQL QUERIES STORED IN THIS FILE //
/////////////////////////////////////

const getUserByFirstName = "SELECT * FROM users WHERE firstname = $1";

const getUsersByFirstLetter =
  "SELECT firstname FROM users WHERE firstname LIKE $1";

/*
const getAllUsers = "SELECT * FROM users";

const getUserById = "SELECT * FROM users WHERE id = $1";

const addUser = `INSERT INTO users(firstname, lastname, maidenname, age, gender, email, phone, username, password, birthdate, image, bloodgroup, height, weight, eyecolor, hair)
                 VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`;

const getUserId = "SELECT id FROM users WHERE email = $1 AND username = $2 AND password = $3";

const updateUserById = `UPDATE users SET firstname = $1, lastname = $2, maidenname = $3, age = $4, gender = $5, email = $6, phone = $7, username = $8, password = $9, birthdate = $10,
                    image = $11, bloodgroup = $12, height = $13, weight = $14, eyecolor = $15, hair = $16 WHERE id = $17`;

const deleteUserById = `DELETE FROM users WHERE id = $1`;
*/

module.exports = {
  getUserByFirstName,
  getUsersByFirstLetter,
};
