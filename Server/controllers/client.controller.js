const Client = require ('../models/client.model.js');
const fs = require('fs');

exports.createClient = (req, res) => {
    let Client = new Client(
        {
            nom_entreprise: req.body.nom,
            adresse: {
                rue: req.body.rue,
                ville: req.body.ville,
                cp: req.body.cp,
            },
            client_referent: {
                nom: req.body.nom,
                pernom: req.body.pernom,
                mail: req.body.mail,
                telephone: req.body.telephone,
            },
            secteur_activite: req.body.secteur_activite,

        }
    );
    Client.save((err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Client created");
        }
        res.send(Client);
    })
}

exports.updateClient = (req, res) => {
    Client.findByIdAndUpdate(req.params.id,req.body, function (err, Client) {
        if(err) {
            console.log(err);
        }
        else {
            console.log('updated')
        }
        res.send(Client);
    })
}


exports.deleteClient = (req, res) => {
    Client.findByIdAndRemove(req.params.id, (err) => {
        if(err) {
            console.log(err);
        }
        res.send('Client successfully deleted');
    })
}
exports.deleteManyClient = (req, res) => {
    let deleteParam = {
        nom:req.params.nom
    }
    Client.deleteMany(deleteParam, (err) => {
        console.log(deleteParam);;

        if(err) {
            console.log(err);
        }

        console.log(req.params.nom);
        res.send('successfully');
    })
}
exports.updateManyClient = (req, res) => {
    Client.updateMany(
        { nom: req.params.data },
        { $set: { nom: req.params.newdata } },
        (err) => {
        if(err) {
            console.log(err);
        }

        console.log(req.params.nom);
        res.send('Salariés updated');
    })
}

exports.allClient = (req, res ) => {
    Salarie.find((err, Client) => {
        if(err) {
            console.log(err);
        }
        res.send(Client);
    })
}

exports.getClient = function (req, res) {
    Salarie.findById(req.params.id, function (err, Client) {
        if (err) return (Client);
        res.send(Client);
    });
};

