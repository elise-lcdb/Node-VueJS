<script>
	const myApiUrl = "http://localhost:3000/api/v1/salarie/";
  const myApiUrladd = "http://localhost:3000/api/v1/salarie/add/";
  const myApiUrlremove = "http://localhost:3000/api/v1/salarie/remove/";

  export default {
    getSalarie() {
      return fetch(myApiUrl)
      .then((response) => {
        console.log(response)
        return response.json();
      })
    },
    createSalarie(salarienom, salarieprenom, salarieusername, salarieddn, salarierue, salarieville, salariecp, salarietel, salariemail, salarieposte){
      fetch(myApiUrladd, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'salarienom': salarienom,
          'salarieprenom': salarieprenom,
          'salarieusername': salarieusername,
          'salarieddn': salarieddn,
          'salarierue': salarierue,
          'salarieville': salarieville,
          'salariecp': salariecp,
          'salarietel': salarietel,
          'salariemail': salariemail,
          'salarieposte': salarieposte,
        }),
      })
       .then((response) => {
        console.log(response)
        return response.json()
      }).then((data) =>{
        console.log(data);
      }).catch( error => {console.log(error);});
    },
    deleteSalarie(id){
      return fetch(myApiUrlremove + id)
       .then((response) => {
        console.log(response);
          return response.json()
        })
    },
    editSalarie(id, salarienom, salarieprenom, salarieusername, salarieddn, salarierue, salarieville, salariecp, salarietel, salariemail, salarieposte) {
      fetch(myApiUrl + id, {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
        {
          'salarienom': salarienom,
          'salarieprenom': salarieprenom,
          'salarieusername': salarieusername,
          'salarieddn': salarieddn,
          'salarierue': salarierue,
          'salarieville': salarieville,
          'salariecp': salariecp,
          'salarietel': salarietel,
          'salariemail': salariemail,
          'salarieposte': salarieposte,
        }
        )
      })
       .then((response) => {
        console.log(response)
        return response.json()
      }).then((data) =>{
        console.log(data);
      }).catch( error => {console.log(error);});
    },
    oneSalarie(id) {
      return fetch(myApiUrl + id)
      .then((response) => {
        return response.json()
      })

    } 
  }
</script>