const Salarie = require ('../models/salarie.model.js');
const fs = require('fs');

exports.createSalarie = (req, res) => {
    let salarie = new Salarie(
        {
            nom: req.body.nom,
            prenom: req.body.prenom,
            username: req.body.username,
            ddn: req.body.ddn,
                rue: req.body.rue,
                ville: req.body.ville,
                cp: req.body.cp,
            telephone: req.body.telephone,
            mail: req.body.mail,
            poste: req.body.poste

        }
    );
    salarie.save( (err) => {
        if (err) {
            console.log(err);
        }

        else {
            console.log("Salarie created");
        }
        res.send('Salarie created' + salarie);
    })
}

exports.updateSalarie = (req, res) => {
    Salarie.findByIdAndUpdate(req.params.id,req.body, function (err, salarie) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('updated')
        }
        res.send(salarie);
    })
}


exports.deleteSalarie = (req, res) => {
    Salarie.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.log(err);
        }
        res.send('Salarié successfully deleted');
    })
}
exports.deleteManySalarie = (req, res) => {
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
exports.updateManySalarie = (req, res) => {
    Salarie.updateMany(
        { nom: req.params.data },
        { $set: { nom: req.params.newdata } },
        (err) => {
        if(err) {
            console.log(err);
        }

        console.log(req.params.nom);
        res.send('Salaries updated');
    })
}

exports.allSalarie = (req, res ) => {
    Salarie.find((err, salarie) => {
        if(err) {
            console.log(err);
        }
        res.send(salarie);
    })
}

exports.getSalarie = function (req, res) {
    Salarie.findById(req.params.id, function (err, salarie) {
        if (err) return (salarie);
        res.send(salarie);
    });
};

