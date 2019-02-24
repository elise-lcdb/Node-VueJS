const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SalarieSchema = new Schema ({
    nom: String,
    prenom: String,
    username: String,
    ddn: Date,
    adresse: {
        rue: String,
        ville: String,
        cp: Number,
    },
    telephone: String,
    mail: String,
    poste: String
    
});

module.exports = mongoose.model('Salarie', SalarieSchema);
