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
    createProjet (projetnom, projetdescription, projetdatedebut, projetdatefin, projetmontant, projetstatut)
    {
      fetch(myApiUrladd, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "projetnom": projetnom,
          "projetdescription": projetdescription,
          "projetdatedebut": projetdatedebut,
          "projetdatefin": projetdatefin,
          "projetmontant": projetmontant,
          "projetstatut": projetstatut,
        })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      }).then((data) =>{
        console.log(data);
      }).catch( error => {console.log(error);});
    },
    deleteProjet(id){
      return fetch(myApiUrlremove + id)
       .then((response) => {
        return response.json();
        })
    },
    editProjet(id, projetnom, projetdescription, projetdatedebut, projetdatefin, projetmontant, projetstatut) {
      fetch(myApiUrl + id, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "projetnom": projetnom,
          "projetdescription": projetdescription,
          "projetdatedebut": projetdatedebut,
          "projetdatefin": projetdatefin,
          "projetmontant": projetmontant,
          "projetstatut": projetstatut,
      })
      })
      .then((response) => {
        console.log(response);
        return response.json();
      }).then((data) =>{
        console.log(data);
      }).catch( error => {console.log(error);});
    },
    oneProjet(id) {
      return fetch(myApiUrl + id)
      .then((response) => {
        return response.json();
      })

    } 
  }
</script>