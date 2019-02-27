const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalarieSchema = new Schema ({
    nom: String,
    prenom: String,
    username: String,
    ddn: String,
        rue: String,
        ville: String,
        cp: String,
    telephone: String,
    mail: String,
    poste: String
    
});

module.exports = mongoose.model('Salarie', SalarieSchema);
