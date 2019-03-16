console.log("Key points about some useful operators");

var a = 5;
console.log(typeof(a));
a = "";
console.log(typeof(a)); //typeof operator returns the type of operator :O
//there are three primitive data types in js, i.e number,string,boolean
console.log(typeof(true));


var o = {python:'dictionary',javascript:'object'}; //in python there are
                                          // key:value pairs,in js there are
                                          // name:value pairs
console.log(typeof(o));
console.log(typeof(function(){return;}));


console.log(typeof(null));
console.log(typeof(undefined));
//js fault...type of null should be null as type of undefined is undefined
// null and undefined are equal in value but not equal in type


//using new operator for declaration will set the type to 'object'
a = new String();
console.log(typeof(a));
a = new Number();
console.log(typeof(a));
a = new Object();
console.log(typeof(a));
// avoid the use of new in js,as it complicates the code and generated unexpected
// behaviour




console.log(a instanceof Object); //instance of operator checks that the given
                                  //argument 1 is type of given object(argument 2)
console.log(a instanceof String); //false


//difference b/w == (equal) and strictly equal (===)

console.log(null == undefined); //return true as null and undefined are same in values
console.log(null === undefined); //false because null and undefined has not the same
                               // datatype, i.e null type == object in js
                               //whereas ,undefined type == undefined in js

console.log(null!==undefined); //true
