<script>
	const myApiUrl = "http://localhost:3000/api/v1/salarie/";
  const myApiUrladd = "http://localhost:3000/api/v1/salarie/add/";
  const myApiUrlremove = "http://localhost:3000/api/v1/salarie/remove/";


	export default {
		getProducts () {
			return fetch(myApiUrl)
			.then((response) => {
				return response.json();
			})
		},
		createSalarie (nom, prenom, username, ddn, rue, ville, cp, telephone, mail, poste){
      fetch(myApuUrladd, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "nom": nom,
          "prenom": prenom,
          "username": username,
          "ddn": ddn,
          "rue": rue,
          "ville": ville,
          "cp": cp,
          "telephone": telephone,
          "mail": mail,
          "poste": poste,
        })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
		},
		deleteSalarie(id){
			return fetch(myApiUrlremove + id)
      	.then((response) => {
        	console.log(response);
        	return response.json();
      	})
		},
		editSalarie(nom, prenom, username, ddn, rue, ville, cp, telephone, mail, poste) {
			fetch(myApiUrl + id, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
         "nom": nom,
          "prenom": prenom,
          "username": username,
          "ddn": ddn,
          "rue": rue,
          "ville": ville,
          "cp": cp,
          "telephone": telephone,
          "mail": mail,
          "poste": poste,
        })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
		},
		getSalarie(id) {
			return fetch(myApiUrl + id)
			.then((response) => {
				return response.json();
			})

		}	
	}
</script>