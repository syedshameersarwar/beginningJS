require('es6-promise').polyfill();
require('isomorphic-fetch');
var a = 5;
var b = a.toString();
if (a===b){ //== check only for value no matter one is string and other is number
  console.log(a,b);
  console.log("a equal b");
}
else{
  console.log("a not equal b");
}
var inn = 2;
switch(inn){ //compare cases with ===
  case '1':
    console.log("1 selected");
    //console.log("hello");
    break;
  case 2:
    console.log("2 entered");
    break;
  default:
    console.log("nothing");
}

switch(inn){
  case '1':
    console.log("1 selected");
    //console.log("hello");
    if(inn === '1')
      console.log("hel");
    break;
  case 2:
    if(inn === 2)
      console.log("helo");
    console.log("2 entered");
    break;
  case 'h':
    if(inn === 'h')
      console.log("hello");
    console.log("h in innn");
    break;
  default:
    console.log("nothing");
}
console.log(`choice is ${inn}`);
/*
const http = new XMLHttpRequest();
const url = 'http://localhost:3000';
http.open("GET",url);
http.send();

http.onreadystatechange = ()=>console.log(http.responseText);
*/
/*
const url = 'http://localhost:3000';
fetch(url)
.then(data=>data.json())
.then(response=>console.log(response));
*/

fetch('https://api.github.com/users/KrunalLathiya')
    .then(response=>response.json())
    .then(data => console.log(data))
    .catch(error=>console.log(error));




function SomeClass(name){
  this.name = name;
  this.id = 0;
  this.print = ()=>(this.name+" "+this.id);
}
var n = new SomeClass("shameer");
console.log(n.print());

//setInterval(()=>console.log("after every 3 seconds"),3000);
console.log("hello");
setTimeout(()=>console.log("after  3 seconds"),3000);
console.log("world");



var pr = new Promise(function(resolve,reject){
  setTimeout(()=>/*resolve({name:"Abc",nationality:"pak",
                        school:"cbcc",age:18}),3000);*/
                reject({name:"Abc",nationality:"pak",
                school:"cbcc",age:18}),3000);
})
pr.finally(()=>console.log("Promise completed,dont know resolved or rejected"))
.then(result => console.log(result))
.catch(error=>console.log(error)); //always link catch after then immediately
