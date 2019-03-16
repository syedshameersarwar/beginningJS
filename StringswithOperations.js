console.log("Strings");

var str = "Hello World";

console.log(str.indexOf('Wor')); //returns the starting index from where
                                // sub string begins
console.log(str.indexOf('j')); //returns -1 if sub string not in string

console.log(str.lastIndexOf('o')); //returns index of last occurence of substr
                                  // search backwards
console.log(str.indexOf('j')); //returns -1 if sub string not in string

console.log(str.indexOf('o',4)); //2nd parameter tells starting position of
                                // search
console.log(str.lastIndexOf('o',9)); // as lastIndexOf searches from end
                                    // so it will start the search from 9th last
                                    // position towards the start

console.log(str.length); //retruns length of string

console.log(str.search("Wor")); //functionality same as indexOf


console.log(str.slice(4,7)); //same as python slicing
console.log(str.slice(-3,-1));//can take negative arguments and counts from the
                             // end,same as python

console.log(str.slice(4)); //leaving 2nd arg will return the string from given
                          //position to end


console.log(str.substring(4,7)); //same as slice but can not take - values
console.log(str.substring(4)); //leaving 2nd arg will return the string from given
                          //position to end


console.log(str.substr(4,4)); //2nd arg is the length of string to be extracted
console.log(str.substr(4));//leaving 2nd arg will return string from given position
                          // to end
console.log(str.substr(-5));//can take -ve values


console.log(str.replace("World","Dunya")); //case sensitive,replaces only
                                  //first occurence o matched string
console.log(str.replace(/world/i,"Du")); //using regular expression for case
                                          // sensitivity
console.log("Hello World World".replace(/World/g,"Dun")); //replace all
                                           //occurences of substring


console.log("get upper".toUpperCase());
console.log("GET loWer".toLowerCase());

console.log("concating ".concat('hello','world'));

console.log('    removing whitespaces   '.trim()) //remove whitespaces before
                                           //and after the alphabetic String


console.log("character".charAt(5)); //return the character at given index of string
console.log("charcter".charCodeAt(2));// returns ascii code of char at given index

var s = "Property access";                                //of String
console.log(s[3]);  //propery acess is read-only
 s[3] = 'j'; //strings are immutable,but this statement will not throw the error
            // and string will remain the same,so property access is not preffered
console.log(s); //string remains the same as before


var f = new String("Equal");
var k = new String("Equal");

console.log("Equal"==f); //returns true as both have same value
console.log("Equal"===f)//false as first is string while f in object due to new
console.log(f==k)//false as object comparision always return false in js
console.log(f===k)//same reason as above
// so avoid using new

//one important fact: all string method returns new string
// and does not change the calling string
//as strings are immuatable
