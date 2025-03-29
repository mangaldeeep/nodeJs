// const http=require('http')
// const hostname='172.0.0.1'
// const port=7000;

//  const server=http.createServer((req,res)=>{
//   res.end('<h1>Hello</h1>')

// });

//  server.listen(port);
//   console.log(`Server is running successfully at http://${hostname}:${port}`)
 
import countryName from "country-name";
 
// countryName( 3-LETTER COUNTRY CODE , LANGUAGE SUBTAG )
countryName("USA", "en"); // United States
countryName("USA", "ja"); // アメリカ合衆国
countryName("JPN", "en"); // Japan
countryName("JPN", "ja"); // 日本
