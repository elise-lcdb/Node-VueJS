const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetSchema = new Schema (
	{
		projetnom: String,
		projetdescription: String,
		projetdatedebut: String,
		projetdatefin: String,
		projetmontant: String,
		projetstatut: String,
	}
);

module.exports = mongoose.model('Projet', ProjetSchema);