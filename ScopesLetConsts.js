console.log("Points about scopes,let,consts");

var a = 5;
{
  var a = 6;
} //modified a value as variable declared with var does not have block scope
console.log(a);


var b = 4;
{
  let b = 3; //b will be 3 here
}
console.log(b); //here b = 4 as variables declared with let have block scopes

let i = 5;
for(let i = 0;i<10;i++)
  console.log("let magic");
console.log(i); //here i will be 5 as for loop's i have a different scope

var c = 5;
//let c = 4; //error,identifier has already been declared
console.log(c); //declaring var variable with let in global or any scope is NOT
           //allowed

{
  let d = 5; //vice versa of above case,i.e Not allowed
  //var d = 6;
  console.log(d);
}


let g = 6;
console.log(g);
{
  let g = 7; //redeclaring let variables in a different scope is allowed.
  console.log(g);
}
//let g = 8; //redeclaring let variables in the same scope with let is not
              //allowed
console.log(g);



example = 5;
console.log(example);
{
  example1 = 6;
}
console.log(example1); //any variable which is not declared anywhere(any scope)
                  //and is assigned a value ,it will become a global variable
hoist = 7;
console.log(hoist);
var hoist; //only var variables can be used before declaration,because
         // of JS hoisting behaviour,i.e all declaration are brought at the top
         //of the code at compile time


//let and const variables are not hoisted

const con = {constant:'Change'};
con['new constant']= "Change2";
console.log(con);
//con = {new:"failed"}; //error,const variables are assigned when they are declared
                     //and the objects at which they are referencing can
                     //mutate but the const variables will always reference the
                     //object,ie referencing to the object is constant,
                     //object itself can be mutated or modified.
