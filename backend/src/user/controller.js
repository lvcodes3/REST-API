//////////////////////////////////////////////////////////////
// BUSINESS LOGIC RELATED TO EACH ROUTE STORED IN THIS FILE //
//////////////////////////////////////////////////////////////
const pool = require("../db/db.js");
const queries = require("./queries");
const https = require("https"); // https used to GET JSON data from the URL

const getUserByFirstName = async (req, res) => {
  try {
    // first name from params
    const firstName = req.params.firstname;

    // check if user name exists in the db
    const user = await pool.query(queries.getUserByFirstName, [firstName]);
    if (user.rows.length === 0) {
      return res.send("User not found.");
    }

    // returning the data of the user
    res.status(200).json(user.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
};

const getUsersByFirstLetter = async (req, res) => {
  try {
    const firstLetter = req.params.firstletter + "%";

    // check if user name exists in the db
    const users = await pool.query(queries.getUsersByFirstLetter, [
      firstLetter,
    ]);
    if (users.rows.length === 0) {
      return res.send("User not found.");
    }

    // returning the data of the user
    res.status(200).json(users.rows);
  } catch (err) {
    console.log(err.message);
  }
};

/*
const addUsers = (req, res) => {
    // GET the dummy JSON data from the URL to store into users table
    try {
        https.get('https://dummyjson.com/users', (response) => {
            let data = '';

            // chunk of data has been received 
            response.on('data', (chunk) => {
                data += chunk;
            });

            // entire data has been received
            response.on('end', async () => {
                console.log("JSON data from URL has been received.");

                const users = JSON.parse(data); //console.log(users["users"][0]);

                // loop through each user
                for (let i = 0; i < users["users"].length; i++) {

                    // last name modification (fixing error)
                    if (users["users"][i]["lastName"].includes("'")) {
                        users["users"][i]["lastName"] = users["users"][i]["lastName"].replaceAll("'", " ");
                    }

                    await pool.query(
                        queries.addUser,
                        [users["users"][i]["firstName"], users["users"][i]["lastName"], users["users"][i]["maidenName"],
                         users["users"][i]["age"], users["users"][i]["gender"], users["users"][i]["email"], 
                         users["users"][i]["phone"], users["users"][i]["username"], users["users"][i]["password"],
                         users["users"][i]["birthDate"], users["users"][i]["image"], users["users"][i]["bloodGroup"],
                         users["users"][i]["height"], users["users"][i]["weight"], users["users"][i]["eyeColor"],
                         JSON.stringify(users["users"][i]["hair"])]
                    );
                }
                console.log("Users from the JSON data have been added into the database.");
                res.status(200).send("Users from the JSON data have been added into the database.");
            });
        });
    } 
    catch (err) {
        console.log(err.message);
    }
}


const getAllUsers = async (req, res) => {
    // get all users in the db
    try {
        const allUsers = await pool.query(
            queries.getAllUsers
        );
        res.status(200).json(allUsers.rows);
    } 
    catch (err) {
        console.log(err.message);
    }
}


const getUserById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const user = await pool.query(
            queries.getUserById,
            [id]
        );
        if (user.rows.length === 0) {
            return res.send(`User of id: ${id} was not found in the db.`);
        }

        res.status(200).json(user.rows[0]);
    } 
    catch (err) {
        console.log(err.message);
    }
}


const addUser = async (req, res) => {
    try {
        // get the data passed in from the body
        const { 
            firstname, lastname, maidenname, age, gender, email, phone, username, password,
            birthdate, image, bloodgroup, height, weight, eyecolor, hair 
        } = req.body;
        
        const newUser = await pool.query(
            queries.addUser,
            [firstname, lastname, maidenname, age, gender, email, phone, username,
             password, birthdate, image, bloodgroup, height, weight, eyecolor, hair]
        );

        const newUserId = await pool.query(
            queries.getUserId,
            [email, username, password]
        );
        
        // returning the id of the newly added user
        res.status(200).json(newUserId.rows[0]);
    } 
    catch (err) {
        console.log(err.message);
    }
}


const updateUserById = async (req, res) => {
    try {
        // get the id passed in from the url
        const id = parseInt(req.params.id);

        // get the data passed in from the body
        const { 
            firstname, lastname, maidenname, age, gender, email, phone, username, password,
            birthdate, image, bloodgroup, height, weight, eyecolor, hair 
        } = req.body;

        // check if user id exists in the db
        const user = await pool.query(
            queries.getUserById,
            [id]
        );
        if (user.rows.length === 0) {
            return res.send(`User of id: ${id} was not found in the db.`);
        }

        const updatedUser = await pool.query(
            queries.updateUserById,
            [firstname, lastname, maidenname, age, gender, email, phone, username, password,
             birthdate, image, bloodgroup, height, weight, eyecolor, hair, id]
        );

        res.status(200).send({"message": `User of id: ${id} has been updated.`});
    } 
    catch (err) {
        console.log(err.message);
    }
}


const deleteUserById = async (req, res) => {
    try {
        // get the id passed in from the url
        const id = parseInt(req.params.id);

        // check if user id exists in the db
        const user = await pool.query(
            queries.getUserById,
            [id]
        );
        if (user.rows.length === 0) {
            return res.send(`User of id: ${id} was not found in the db.`);
        }

        // delete the user by id from the db
        await pool.query(
            queries.deleteUserById,
            [id]
        );
        res.status(200).send({"message": `User of id: ${id} has been deleted.`});
    } 
    catch (err) {
        console.log(err.message);
    }
}
*/

module.exports = {
  getUserByFirstName,
  getUsersByFirstLetter,
  /*
  addUsers,
  getAllUsers,
  getUserById,
  addUser,
  updateUserById,
  deleteUserById,
  */
};
