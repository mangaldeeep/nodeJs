//http module 
const http = require("http");
const port=3000;
const hostname=`127.0.0.1`

const server =http.createServer((req, res) => {
    res.end('<h1>Hello</h1>');
  });
  server.listen(port,()=>{
    console.log(`Server is running successfully http://${hostname}at${port}`)
  })
