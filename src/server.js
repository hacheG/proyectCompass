const cors = require('cors');
const express = require('express');                    // add express
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();                                 // init app with express
const http = require('http');
const port = process.env.PORT || 5000;

const locationModel = require('../api/models/locationModel');
const routes = require('../api/routes/locationRoutes');

mongoose.connect("mongodb+srv://admin:admin@cluster0-lrv7q.mongodb.net/compass?retryWrites=true&w=majority", { useNewUrlParser: true ,useUnifiedTopology: true });

mongoose.connection.on('connected', function(){
    console.log("Mongoose default connection is open to compass ");
});
//const locationRoutes = require('../api/routes/locationRoutes');



//locationRoutes.route(app);
app.use(cors());
app.use(bodyParser.json())
app.use('/api', routes);

const server = http.createServer(app);

server.listen(port, () =>{
    console.log(`Server Running in ${port}`, )
});
