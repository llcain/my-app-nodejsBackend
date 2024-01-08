const express = require('express');
const path = require('path');
const adminRoute = require('./routes/admin');
const exp = require('constants');

const app = express();

// EJS template engine setup
app.set('view engine', 'ejs');
app.set('views', './src/pages');

// Setting up the directory on the server for CSS, JavaScript and media files
app.use('/static', express.static(path.join(__dirname + '/public')));

// Configuring the server to work with fomr submissions and json files
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connecting all of the routes
app.use('/', adminRoute);

app.get('/', (req, res) => res.send('Home Route'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));