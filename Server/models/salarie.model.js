const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalarieSchema = new Schema (
	{
		salarienom: String,
		salarieprenom: String,
		salarieusername: String,
		salarieddn: String,
		salarierue: String,
		salarieville: String,
		salariecp: String,
		salarietel: String,
		salariemail: String,
		salarieposte: String
	}
);

module.exports = mongoose.model('Salarie', SalarieSchema);