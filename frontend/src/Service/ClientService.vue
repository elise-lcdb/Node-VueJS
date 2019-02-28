<script>
	const myApiUrl = "http://localhost:3000/api/v1/client/";
  const myApiUrladd = "http://localhost:3000/api/v1/client/add/";
  const myApiUrlremove = "http://localhost:3000/api/v1/client/remove/";

  export default {
    getClient () {
      return fetch(myApiUrl)
      .then((response) => {
        return response.json();
      })
    },
    createClient (nom_entreprise, adresse, rue, ville, cp, contact_referent, nom, prenom, telephone, mail, secteur_activite)
    {
      fetch(myApiUrladd, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "nom_entreprise": nom_entreprise,
          "adresse": adresse,
            "rue": rue,
            "ville": ville,
            "cp": cp,
            "contact_referent": contact_referent,
            "nom": nom,
            "prenom": prenom,
          "telephone": telephone,
          "mail": mail,
          "secteur_activite": secteur_activite,
        })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
    },
    deleteClient(id){
      return fetch(myApiUrlremove + id)
       .then((response) => {
        return response.json();
        })
    },
    editClient(nom_entreprise, adresse, rue, ville, cp, contact_referent, nom, prenom, telephone, mail, secteur_activite) {
      fetch(myApiUrl + id, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "nom_entreprise": nom_entreprise,
          "adresse": adresse,
            "rue": rue,
            "ville": ville,
            "cp": cp,
            "contact_referent": contact_referent,
            "nom": nom,
            "prenom": prenom,
          "telephone": telephone,
          "mail": mail,
          "secteur_activite": secteur_activite,
      })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
    },
    getClient(id) {
      return fetch(myApiUrl + id)
      .then((response) => {
        return response.json();
      })

    } 
  }
</script>