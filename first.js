


var a = 0;
var b = 1;
//var c = a+b;
var input = 10;
for(;input!=1;){
  if (input%2==0){
    input = input/2;
  }
  else{
    input = input*3+1;
  }
  console.log(input);


}


function world(a,b){
  return a*b;
}  //function definitions are stored when code is executed.
console.log(world(7,5));
var a = function(a,b){  //not executed until the line is reached,er
  return a*b;
}
console.log(a(7,5)); //error



console.log(function(a,b){ //instantly invoked function,define and called,similar
                           //lamba in python
    return a*b;
}(3,8));

(function (a,b){ //instantly invoked function,define and called,similar
                           //lamba in python
    return;
}) (4,4);

console.log("ifi = "+ (function iif(a,b){
  return a*b;
})((function(a,b){return a+b;})(4,5),(function(a,b){return a-b;})(6,7)));

var a = (a,b)=> a+b; //lamba function in js
console.log(a(7,5));

function calbacks(cal){ //call back function:calls the given function.
  return cal(7,5);
}

function calback(cal){ //no call back function:return simply the reference of function.
  return cal;
}

calbacks(function (){console.log("hello");});

function add(a,b){
  return a+b;
}
function sub(a,b){
  return a-b;
}
function mul(a,b){
  return a*b;
}

console.log(calback(add)(3,4));

var func = [add,sub,mul];

for (var i=0;i<3;i++){
  console.log(calbacks(func[i]));
}

console.log(((a,b)=>a-b)(3,4));//lambda function called instantly

/* read about let datatype and scopes*/
/*loops are similar to c*/
document.write("first javascript class");
