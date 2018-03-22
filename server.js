var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

// port number
const port = 3000;

// connet to the database
mongoose.connect('mongodb://localhost:27017/poilist');
mongoose.connection.on('connected',()=> {
     console.log('Connected to mongoDB on port 27017');
});
mongoose.connection.on('error',(err)=> {
    if (err) {
        console.log('Failed to connect to database due to '+err);
    }
    
});

app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

// Test server connexion
app.get('/',(req,res) => {
    res.send('connexion OK');
});

app.use('/api',route);

app.listen(port,() => {
    console.log('Server started on port : '+port);
});

