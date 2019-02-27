const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
const port = 3000;
var cors = require('cors');
const SalarieController = require ('./controllers/salarie.controller.js');
const ClientController = require ('./controllers/client.controller.js');
const ProjetController = require ('./controllers/projet.controller.js');

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
// app.get('/api/v1/salarie/', SalarieController.allSalarie);
// app.get('/api/v1/salarie/:id', SalarieController.oneSalarie);
// app.get('/api/v1/salarie/remove/:id', SalarieController.removeSalarie);
app.put('/api/v1/salarie/:id', SalarieController.updateSalarie);

//Client
app.post('/api/v1/client/add/', ClientController.createClient);
app.get('/api/v1/client/', ClientController.allClient);
app.get('/api/v1/client/:id', ClientController.oneClient);
app.get('/api/v1/client/remove/:id', ClientController.removeClient);
app.put('/api/v1/client/:id', ClientController.updateClient);
//Projet
app.post('/api/v1/projet/add/', ProjetController.createProjet);
app.get('/api/v1/projet/', ProjetController.allProjet);
app.get('/api/v1/projet/:id', ProjetController.oneProjet);
app.get('/api/v1/projet/remove/:id', ProjetController.removeProjet);
app.put('/api/v1/projet/:id', ProjetController.updateProjet);

app.listen(port, () => {
	console.log(`Server on on port ${port}`);
})