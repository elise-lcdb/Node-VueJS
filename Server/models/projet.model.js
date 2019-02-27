const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProjetSchema = new Schema ({
    nom: String,
    description: String,
    date_debut: Date,
    date_fin: Date,
    montant_total: Number,
    statut: String,
    
});

module.exports = mongoose.model('Projet', ProjetSchema);
