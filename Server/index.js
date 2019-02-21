const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
const port = 3000;
var cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(function(req, res, next) {
	res.setHeader('Content-type', 'application/json');
	res.setHeader('Accept', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-type, Authorization, Access-Control-Allow-Origin');
	next();

});
// Create Database because that is an onld one 
// mongoose.connect('mongodb://elise:a0a0a0@ds119734.mlab.com:19734/nodejs-dev-1', (err) => {
// 	if(err) {
// 		console.log('Database not found');
// 	}
// 	else {
// 		console.log('Database connected');
// 	}
// })
app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})