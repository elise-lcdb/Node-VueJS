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
    createClient (cliententreprise, clientrue, clientville, clientcp, clientrefnom, clientrefprenom, clientrefmail, clientreftel, clientsec)
    {
      fetch(myApiUrladd, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "cliententreprise": cliententreprise,
          "clientrue": clientrue,
          "clientville": clientville,
          "clientcp": clientcp,
          "clientrefnom": clientrefnom,
          "clientrefprenom": clientrefprenom,
          "clientrefmail": clientrefmail,
          "clientreftel": clientreftel,
          "clientsec": clientsec,
        })
      })
      .then((response) => {
        console.log(response)
        return response.json()
      }).then((data) =>{
        console.log(data);
      }).catch( error => {console.log(error);});
    },
    deleteClient(id){
      return fetch(myApiUrlremove + id)
       .then((response) => {
        return response.json();
        })
    },
    editClient(id, cliententreprise, clientrue, clientville, clientcp, clientrefnom, clientrefprenom, clientrefmail, clientreftel, clientsec) {
      fetch(myApiUrl + id, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          "cliententreprise": cliententreprise,
          "clientrue": clientrue,
          "clientville": clientville,
          "clientcp": clientcp,
          "clientrefnom": clientrefnom,
          "clientrefprenom": clientrefprenom,
          "clientrefmail": clientrefmail,
          "clientreftel": clientreftel,
          "clientsec": clientsec,
      })
      })
      .then((response) => {
        console.log(response)
        return response.json()
      }).then((data) =>{
        console.log(data);
      }).catch( error => {console.log(error);});
    },
    oneClient(id) {
      return fetch(myApiUrl + id)
      .then((response) => {
        return response.json();
      })

    } 
  }
</script>