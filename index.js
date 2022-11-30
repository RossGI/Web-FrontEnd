const express = require('express');
require('dotenv').config();

const app = express();

const port = 8000;

app.use('/',express.static(__dirname + '/assets'));

app.listen(port,() =>{
    console.log('App is running in port ' + port);
})