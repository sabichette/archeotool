// importing modules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

// port number
const port = 3000;

// add middleware
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

// route definitions
const routes = require('./routes/routes');

// connect to the database
mongoose.connect('mongodb://localhost:27017/pilist');
// on connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database mongodb @ 27017');
});
// on error
mongoose.connection.on('error', (err) => {
    if (err) {
        console.log('Error in database connection: '+err);
    }
});

app.use('/api',routes);

app.listen(port,() => {
    console.log('Server started at port : '+port);
})
