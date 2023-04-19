/////////////////////////////////////
// USER ROUTES STORED IN THIS FILE //
/////////////////////////////////////
const { Router } = require("express"); // importing express Router
const controller = require("./controller"); // importing our controller

const router = Router(); // making instance of the express router

// setting up the sub-routes created in controller.js
router.get("/1/:firstname", controller.getUserByFirstName); // GET   ->   localhost:3000/users    ->   getUserByName()
router.get("/2/:firstletter", controller.getUsersByFirstLetter);

//router.get("/add", controller.addUsers);          // GET   ->   localhost:3000/users/add   -> addUsers()
//router.get("/", controller.getAllUsers);          // GET   ->   localhost:3000/users   ->   getUsers()
//router.get("/:id", controller.getUserById);       // GET   ->   localhost:3000/users/id-integer-here   ->   getUserById()
//router.post("/", controller.addUser);             // POST   ->   localhost:3000/users   ->   addUser()
//router.put("/:id", controller.updateUserById);    // PUT   ->   localhost:3000/users/id-integer-here   ->   updateUserById()
//router.delete("/:id", controller.deleteUserById); // DELETE   ->   localhost:3000/users/id-integer-here   ->   deleteUserById()

module.exports = router;
