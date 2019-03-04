const Projet = require ('../models/projet.model.js');

exports.createProjet = (req, res) => {
	let projet = new Projet(
		{
			projetnom: req.body.projetnom,
			projetdescription: req.body.projetdescription,
			projetdatedebut: req.body.projetdatedebut,
			projetdatefin: req.body.projetdatefin,
			projetmontant: req.body.projetmontant,
			projetstatut: req.body.projetstatut,
		}
	);
	projet.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("Projet created");
		}
		res.send(projet);
	})
}

exports.getProjet = (req, res) => {
	Projet.find((err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send(projet);
	})
}

exports.oneProjet = (req, res) => {
	Projet.findById(req.params.id, (err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send(projet);
	})
}

exports.removeProjet = (req, res) => {
	Projet.findByIdAndRemove(req.params.id, (err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send("Projet deleted");
	})
}

exports.updateProjet = (req, res) => {
	Projet.findByIdAndUpdate(req.params.id, req.body, (err, projet) => {
		if(err) {
			console.log(err);
		}
		res.send("Projet modified");
	})
}
// exports.deleteManySalarie = (req, res) => {
// 	let deleteParam = {
// 		productname: req.params.productname
// 	}
// 	Product.deleteMany(deleteParam, (err) => {
// 		console.log(deleteParam)
// 		if(err){
// 			console.log(err)
// 		}
// 		res.send('Product successfully deleted')
// 	})
// }