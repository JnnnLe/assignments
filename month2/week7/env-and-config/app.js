const express = require('express');
const app = express();
const port = 3000;
;
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const PASSWORD = require('./config');

console.log('secret below');
console.log('HERE:', PASSWORD);