const Client = require ('../models/client.model.js');

exports.createClient = (req, res) => {
	let client = new Client(
		{
			cliententreprise: req.body.cliententreprise,
			clientrue: req.body.clientrue,
			clientville: req.body.clientville,
			clientcp: req.body.clientcp,
			clientrefnom: req.body.clientrefnom,
			clientrefprenom: req.body.clientrefprenom,
			clientrefmail: req.body.clientrefmail,
			clientreftel: req.body.clientreftel,
			clientsec: req.body.clientsec,
		}
	);
	client.save( (err) => {
		if (err) {
			console.log(err);
		}

		else {
			console.log("Client created");
		}
		res.send(client);
	})
}

exports.allClient = (req, res) => {
	Client.find((err, client) => {
		if(err) {
			console.log(err);
		}
		res.send(client);
	})
}

exports.oneClient = (req, res) => {
	Client.findById(req.params.id, (err, client) => {
		if(err) {
			console.log(err);
		}
		res.send(client);
	})
}

exports.removeClient = (req, res) => {
	Client.findByIdAndRemove(req.params.id, (err, client) => {
		if(err) {
			console.log(err);
		}
		res.send("Client deleted");
	})
}

exports.updateClient = (req, res) => {
	Client.findByIdAndUpdate(req.params.id, req.body, (err, client) => {
		if(err) {
			console.log(err);
		}
		res.send("Client modified");
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