/*
import {a} from './main.js';
a();//for parcel



console.log("hello world again");
//CommonJs Module
//var a = require('./main.js');
//a();
*/

import http from "http"; //with esm
//const http = require('http'); //for heroku
http.createServer((req,res,nxt)=>{
  console.log('helllo world');
  console.log(req.url);
    if (req.url == "/"){
      res.end("Chicken hello"); //end is used to indicate last response
    }
  }
).listen(3000);
