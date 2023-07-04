import {createServer} from 'http';
import https from 'https';
//const http = require('http'); 


const server = createServer ((req,res) => {
  if(req.url=='/campus'){

    https.get('https://api.nasa.gov/neo/rest/v1/feed?api_key=kQeP7WjFDRwamqP5GC95JEhl7TapglfIkH7HWZ5N', (input) => {
      let data = '';
      // A callback for when a data chunk is received.
      input.on('data', (chunk) => {
        data += chunk;
      });

    // A callback for when the request is complete.
    input.on('end', () => {

  //Parseo el objeto json a objeto javascrip´t para poder acceder a sus propiedades con el sistems de puntuación
  let plantilla = /* html */ `
  <h1 style="display: flex; justify-content: center;">Asteroids near to the earth</h1>
  <div class="padre" style="width: 100%; display: flex; flex-wrap: wrap; justify-content: center;">
`;
let objJson = JSON.parse(data);
let asteroids = objJson.near_earth_objects;
//Obtengo los valores del objeto en cuestión para convertirlo en un array y poder iterarlo
Object.values(asteroids).forEach((array)=>{
  array.forEach((element)=>{
      plantilla += /* html */ `
          <div class="cards" style="">
              <h2>Name: ${element.name}</h2>
              <h3>Size:</h3>
                  <p>Min size: ${element.estimated_diameter.meters.estimated_diameter_min} Meters</p>
                  <p>Max size: ${element.estimated_diameter.meters.estimated_diameter_max} Meters</p>
              <h3>Is potencially hazardous?:</h3>
                  <p>${element.is_potentially_hazardous_asteroid}</p>
              <h3>Close approach data</h3>
                  <p>Close approach date</p>
                  <p>${element.close_approach_data[0].close_approach_date_full}</p>
          </div>
      `
  })
})
plantilla += /* html */ `
</div>
<style>
  * {
      margin: 0;
      padding: 0;
  }
  h1 {
      height: 100px;
      font-family: "Helvetica";
      align-items: center;
  }
  .cards {
      font-family: "Helvetica";
      width: 400px;
      height: 250px;
      background: rgb( 10, 0, 176);
      margin: 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      border-radius: 50px;
      color: white;
  }
</style>
`;

res.end(`${plantilla}`);
        })
      })

  }else{
    console.log('aaaa');
    res.end();
  }
});


/* const config ={
  hostname: '127.0.0.1',//localhost',
  port:5500
}; */


/* server.listen(config, ()=>{
  console.log(`https://${config.hostname}:${config.port}/`);
});
 */
server.listen(4000, ()=>{

});


/* server.listen(config.port, () => {
  console.log(`https://localhost:${config.port}/`);
}); */


/* import { createServer } from 'http';
import https from 'https';

const server = createServer ((req, res) => {
  https.get('https://pokeapi.co/api/v2/pokemon/pikachu', (response) => {
    let data = '';
    response.on('data', (chunk) => {
      data += chunk;
    });

    response.on('end', () => {
      let response = JSON.parse(data);
      res.end(JSON.stringify(response));
    });
  }).on("error", (err) => {
    console.error("Error: " + err.message);
  });
});

const config ={
  hostname: '127.0.1.2',
  port: 5500
};

server.listen(config, ()=>{
  console.log(`https://${config.hostname}:${config.port}/`);
});
 */