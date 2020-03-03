const cors = require('cors');
const express = require("express");
const app = express();
const http = require('http');
const productRoutes = require('../api/routes/locationRoutes');
const port = process.env.PORT || 5000;

app.use(cors());

app.use('/api/location', productRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});




const server = http.createServer(app);

server.listen(port);
