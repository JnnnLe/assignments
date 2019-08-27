//require packages
require('dotenv').config();
const Pool = require("pg").Pool;
const connection = new Pool({
  //create PostgreSQL connection
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: process.env.DB_PASSWORD,
  database: "eventonica"
});

module.exports = connection;