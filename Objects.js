console.log("Here comes the Objects.");

var person = {firstname:"john" //Object properties
            ,lastname : "wick",
            getLastName : function(){ //binding methods to Object as properties
                return this.firstname+" "+this.lastname;
                }
            };
console.log(person.firstname); //accesing Object property
console.log(person['lastname']); //accesing Object property using 2nd way
console.log(person.getLastName()); //invoking object methods

//NOTE : donot declare string,boolean and number variables as objects
//using new keywords because objects cannot be compared in js

var a = new Object();
a = {firstname:"john" //Object properties
            ,lastname : "wick",
            getLastName : function(){ //binding methods to Object as properties
                return this.firstname+" "+this.lastname;
        }
    };
console.log(a==person); //should return true but its false as objects
                        //can not be compared in js
console.log(a===person);

//Reason : as in js,string number and boolean are compared using values
// where Date,Objects and Arrays are compared using references,
//so even two arrays,objects or dates having same value
// are not == or === as there elements or properties have
//different references...
//they are only equal if there references are equal

//for above example

var b = a;
console.log(b==a); //return true
console.log(b===a);// return true as both are referencing to same objects
