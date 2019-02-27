
const Projet = require ('../models/projet.model.js');
const fs = require('fs');

exports.createProjet = (req, res) => {
    let Projet = new Projet(
        {
            nom: req.body.nom,
            description: req.body.description,
            date_debut: req.body.date_debut,
            date_fin: req.body.date_fin,
            montant_total: req.body.montant_total,
            statut: req.body.statut,
        }
    );
    Projet.save((err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Projet created");
        }
        res.send(Projet);
    })
}

exports.updateProjet = (req, res) => {
    Projet.findByIdAndUpdate(req.params.id,req.body, function (err, Projet) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('updated')
        }
        res.send(Projet);
    })
}


exports.deleteProjet = (req, res) => {
    Projet.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.log(err);
        }
        res.send('Projet successfully deleted');
    })
}
exports.deleteManyProjet = (req, res) => {
    let deleteParam = {
        nom:req.params.nom
    }
    Salarie.deleteMany(deleteParam, (err) => {
        console.log(deleteParam);;

        if(err) {
            console.log(err);
        }

        console.log(req.params.nom);
        res.send('successfully');
    })
}
exports.updateManyProjet = (req, res) => {
    Salarie.updateMany(
        { nom: req.params.data },
        { $set: { nom: req.params.newdata } },
        (err) => {
        if(err) {
            console.log(err);
        }

        console.log(req.params.nom);
        res.send('Projet updated');
    })
}

exports.getProjet = (req, res ) => {
    Projet.find((err, Projet) => {
        if(err) {
            console.log(err);
        }
        res.send(Projet);
    })
}

exports.getProjet = function (req, res) {
    Projet.findById(req.params.id, function (err, Projet) {
        if (err) return (Projet);
        res.send(Projet);
    });
};

