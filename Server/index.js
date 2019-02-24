const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
const port = 3000;
var cors = require('cors');
const SalarieController = require ('./controllers/salarie.controller.js');

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
mongoose.connect('mongodb://admin:A12345@ds155663.mlab.com:55663/node-projet', (err) => {
	if(err) {
		console.log('Database not found');
	}
	else {
		console.log('Database connected');
	}
})
app.post('/api/v1/salarie/add/', SalarieController.createSalarie);
app.get('/api/v1/salarie/', SalarieController.allSalarie);
app.get('/api/v1/salarie/:id', SalarieController.oneSalarie);
app.get('/api/v1/salarie/remove/:id', SalarieController.removeSalarie);
app.put('/api/v1/salarie/:id', SalarieController.updateSalarie);
app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})