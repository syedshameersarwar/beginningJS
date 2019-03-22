/*
import {a} from './main.js';
a();//for parcel



console.log("hello world again");
//CommonJs Module
//var a = require('./main.js');
//a();
*/

//import http from "http"; //with esm
const http = require('http'); //for heroku
var fs = require('fs');

const PORT = process.env.PORT || 3000;
console.log(PORT);
http.createServer((req,res,nxt)=>{
  console.log('helllo world');
  console.log(req.url);
    if (req.url == "/"){
       fs.readFile("./index.html",function(err,pgResp){
           if(err){
              res.writeHead(404);
              console.log("error");
           }
           else{
           res.writeHead(200,{ 'Content-Type': 'text/html' });
           res.write(pgResp);
           }
           res.end();
       });
       }
      //res.end("Chicken hello"); //end is used to indicate last response
    }
).listen(PORT,() => console.log(`Listening on ${ PORT }`));
