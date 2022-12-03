const express = require('express');


const app = express();

const port = process.env.PORT || 4200; 

app.use('/',express.static(__dirname + '/assets'));

app.listen(port,() =>{
    console.log('App is running in port ' + port);
})