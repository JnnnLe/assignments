//require packages for .env password and connection
require('dotenv').config();
const Pool = require("pg").Pool;
const connection = new Pool({
  //create PostgreSQL connection
  host: "localhost",
  port: 5432,
  user: "jenn",
  password: process.env.DB_PASSWORD,
  database: "eventonica"
});

module.exports = connection;