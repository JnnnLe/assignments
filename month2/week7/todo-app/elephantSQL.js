const pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

const conString = "postgresql://me:password@localhost:5432/api" 
let client = new pg.Client(conString);
client.connect((err) => {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> My returned output: 2019-08-21T22:57:04.904Z
    client.end();
  });
});