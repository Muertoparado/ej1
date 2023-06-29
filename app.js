//const { createServer } = require('http');
import { createServer } from 'http';
//import { createServer } from 'https';
const https = require('https');

https.get('https://pokeapi.co/api/v2/pokemon/pikachu', (res) => {
  let data = '';

  // A callback for when a data chunk is received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // A callback for when the request is complete.
  res.on('end', () => {
    let response = JSON.parse(data);
    console.log(response);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});


const http = createServer((req, res) => {
    res.on('data', (chunk) => {
        data += chunk;
      });
    

});
const config ={
    hostname: '127.0.0.4',//localhost',
    port:5500
};
http.listen(config, ()=>{
    console.log(`https://${config.hostname}:${config.port}/`);
})