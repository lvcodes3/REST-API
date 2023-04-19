/////////////////////////////////////////////////////
// CONNECTION TO PGSQL DB ESTABLISHED IN THIS FILE //
/////////////////////////////////////////////////////
const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool();

module.exports = pool;
