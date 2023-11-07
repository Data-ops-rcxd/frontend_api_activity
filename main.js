const url = "https://randomuser.me/api/?results=11"
const peticion = await fetch(url, {
  method: 'GET',
})

let templateHTML = ``

if (!peticion.ok) {
  console.log('Peticion falló');
} else {
  const res = await peticion.json()
  const response = res.results
  
  response.forEach(({name,id,email,location,picture}) => {
    templateHTML += `
    <div>
    <h2>Name: ${name.first} ${name.last} </h2>
    <h2>Id: ${id.value} </h2>
    <h2>Email: ${email} </h2>
    <h2>City: ${location.country} </h2>
    <img src="${picture.medium}" />
    <hr/>
    </div>
    `
    
  });
  console.log(response);
}

document.getElementById('app').innerHTML = templateHTML