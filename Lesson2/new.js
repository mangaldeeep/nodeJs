// //os 
// //destructuring

// const {userInfo,homedir,hostname}= require("os");
// console.log(userInfo());
// console.log(homedir());
// console.log(hostname());

//path
const p=require("path");
// const extName=p.extname('new.css');
// console.log(extName)

const join=p.join(__dirname+"/new.html");
console.log(join);

