const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 5002; 

const choresToDo = [];
const pg = require('pg');
const Pool = pg.Pool; //class

//link up database
const pool = new Pool({
    database: 'js-rebuild', //the agreed upon name
    host: 'localhost', // we all have our own on our comps
    port: 5432, //default
    max: 10, //to prevent overload
    idleTimeoutMillis: 10000 //10 secs to not waste time
});

// Finds the data and makes it easy to access in our POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));







// Start up our server, it will be 'listening'
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});