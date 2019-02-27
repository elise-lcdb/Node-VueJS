const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClientSchema = new Schema ({
    nom_entreprise: String,
    adresse: {
        rue: String,
        ville: String,
        cp: Number,
    },
    contact_referent: {
        nom: String,
        prenom: String,
        mail: String,
        telephone: Number,
    },
    secteur_activite: String,
    
});

module.exports = mongoose.model('Client', ClientSchema);
