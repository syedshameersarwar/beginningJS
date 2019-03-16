console.log("Numbers!!!!");

var x = 45;
console.log(x.toString()); //converts numbers to string
console.log(x.toString(16)); //converts number to given  number system
x = NaN; // set x to not a number
console.log(typeof(x)); //number
console.log(isNaN(x)); //can check if number is Nan or not

console.log(5+NaN); //mathematical operations involving NaN will return Nan
console.log(NaN+"hello");//+ operation of Nan with strings will result in
                         //concatentaion
console.log(NaN-"hello"); //returns Nan


console.log("5"+"3");//if both operands of mathematical operations are string
                    //then js will typecast both to numbers and perform the
                    //opertion

console.log((45000).toExponential(3));
console.log((95.4545).toFixed(2));
console.log((95.4556).toPrecision(4));//

console.log(Number(true)); //converts different types to numbers
console.log(Number("10.45"));
console.log(Number("10,45")); //if conversion not possible,returns NaN


console.log(parseInt("10.45 hello")); //reads first integer at begining and
                                      //returns
console.log(parseInt("hello 10")); //return NaN,as no integer in beginning


console.log(parseFloat("10.45 hello")); //reads first boolean at begining and
                                      //returns

console.log(parseFloat("hello 10.45")); //return NaN,as no float in beginning

console.log(1/0); //infinity
//some number properties which donot apply on number value

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);

console.log((6).MAX_VALUE); //undefined,not applies on number values
