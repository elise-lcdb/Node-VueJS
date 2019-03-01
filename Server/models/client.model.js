const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema (
	{
		cliententreprise: String,
		clientrue: String,
		clientville: String,
		clientcp: String,
		clientrefnom: String,
		clientrefprenom: String,
		clientrefmail: String,
		clientreftel: String,
		clientsec: String
	}
);

module.exports = mongoose.model('Client', ClientSchema);