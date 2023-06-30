import { createServer } from 'http';
import https from 'https';

const server = createServer ((res) => {
  console.log("datosss");
    https.get('https://pokeapi.co/api/v2/pokemon/pikachu', (req) => {
      let data = '';
    // A callback for when a data chunk is received.
    req.on('data', (chunk) => {
      data += chunk;
    });

    // A callback for when the request is complete.
    req.on('end', () => {
      let response = JSON.parse(data);
      console.log(response);
     res.end(response);
    });

}).on("error", (err) => {
  console.error("Error: " + err.message);
});

});

const config ={
    hostname: '128.0.1.2',//localhost',
    port:5080
};
server.listen(config, ()=>{
    console.log(`https://${config.hostname}:${config.port}/`);
});

/* server.listen(config.port, () => {
  console.log(`https://localhost:${config.port}/`);
}); */
