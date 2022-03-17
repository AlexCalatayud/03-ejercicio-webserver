const fs  = require("fs")
const http  = require("http")

// Escribí acá tu servidor

http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'image/jpg' });
    const params = req.url.replace('/', '');
    fs.readdir('./images', (err, archivos) => {
      if (err) {
        console.log(err);
      }
      if (archivos.includes(params)) {
        const img = archivos.find((arch) => arch === params);
        const resul = fs.readFileSync(`${__dirname}/images/${img}`);
        res.end(resul);
      } else {
        res.writeHead(404);
        res.end('No se encuentra');
      }
    });
  })
  .listen(1337, 'localhost');