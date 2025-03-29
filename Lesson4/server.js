// const http = require("http");
// const port = 3000;
// const hostname = `127.0.0.1`;

// const server = http.createServer((req, res) => {
//   res.writeHead(205, { "content-type": "text/plain" });
//   res.write("hello");
//   res.end();
// });
// server.listen(port, () => {
//   console.log(`Server is running successfully at http://${hostname}:${port}`);
// });
const http = require("http");
const port=7000;
const hostname='172.0.0.1';

const server=http
  .createServer((req, res) => {
    res.end("<h1>Obrigado</h1>");
  })
  ;
  server.listen(port,hostname,()=>{
    console.log(`server is running successfully at http://${hostname}:${port}`);

  });
  