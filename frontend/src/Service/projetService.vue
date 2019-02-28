<script>
	const myApiUrl = "http://localhost:3000/api/v1/projet/";
  const myApiUrladd = "http://localhost:3000/api/v1/projet/add/";
  const myApiUrlremove = "http://localhost:3000/api/v1/projet/remove/";

  export default {
    getProjet () {
      return fetch(myApiUrl)
      .then((response) => {
        return response.json();
      })
    },
    createProjet (nom, description, date_debut, date_fin, montant_total, statut)
    {
      fetch(myApiUrladd, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "nom": nom,
          "description": description,
          "date_debut": date_debut,
          "date_fin": date_fin,
          "montant_total": montant_total,
          "statut": statut,
        })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
    },
    deleteProjet(id){
      return fetch(myApiUrlremove + id)
       .then((response) => {
        return response.json();
        })
    },
    editProjet(nom, description, date_debut, date_fin, montant_total, statut) {
      fetch(myApiUrl + id, {
        method: 'get',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "nom": nom,
          "description": description,
          "date_debut": date_debut,
          "date_fin": date_fin,
          "montant_total": montant_total,
          "statut": statut,
      })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      })
    },
    getProjet(id) {
      return fetch(myApiUrl + id)
      .then((response) => {
        return response.json();
      })

    } 
  }
</script>