'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const app = express();

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const businessController = require('./routes/business');

app.use('/', rootController);
app.use('/business', businessController);


// const restaurantsModel = require('./models/restaurantsModel');

// app.get('/business/:name', async (req, res) => {
//     const restaurantData = await restaurantsModel.getAllRestaurants();
//     restaurantData.map(restaurant => {
//         if (req.params.name === restaurant.slug) {
//             console.log(restaurant.restaurant_name)
//         }
//     })
//     res.send('ok').end();
// })