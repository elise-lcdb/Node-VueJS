const Salarie = require ('../models/salarie.model.js');

exports.createSalarie = (req, res) => {
	let salarie = new Salarie(
		{
			salarienom: req.body.salarienom,
			salarieprenom: req.body.salarieprenom,
			salarieusername: req.body.salarieusername,
			salarieddn: req.body.salarieddn,
			salarierue: req.body.salarierue,
			salarieville: req.body.salarieville,
			salariecp: req.body.salariecp,
			salarietel: req.body.salarietel,
			salariemail: req.body.salariemail,
			salarieposte: req.body.salarieposte,
		}
	);
	salarie.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log(salarie);
		}
		res.send(salarie);
	})
}

exports.getSalarie = (req, res) => {
	Salarie.find((err, salarie) => {
		if(err) {
			console.log(err);
		}
		res.send(salarie);
	})
}

exports.oneSalarie = (req, res) => {
	Salarie.findById(req.params.id, (err, salarie) => {
		if(err) {
			console.log(err);
		}
		res.send(salarie);
	})
}

exports.deleteSalarie = (req, res) => {
	Salarie.findByIdAndRemove(req.params.id, (err, salarie) => {
		if(err) {
			console.log(err);
		}
		res.send();
	})
}

exports.editSalarie = (req, res) => {
	Salarie.findByIdAndUpdate(req.params.id, req.body, (err, salarie) => {
		if(err) {
			console.log(err);
		}
		res.send(salarie);
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