const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

require('dotenv').config(); //.env file npm install
require('./helpers/init_mongodb');

//Router path
const authRoute = require('./routes/auth.router')

//set router path 
app.use('/api', authRoute)

// start server
const port = 4000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

module.exports = app;