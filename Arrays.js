console.log("***Arrays***");
var a = [1,2,{}];
console.log(typeof(a)); //object
//comparision of objects in js always return false
//until and unless they are pointing the same Arrays

console.log([1,2,{}]==a); //false
console.log([1,2,{}]==a);//definitely false
var b = a;
console.log(a==b);//true as they are referencing same Objects
console.log(a===b);//definitely true

//simple function to compare arrays composed of number and string literals only
function array_compare(array1,array2){
  let s1 = array1.length;
  let s2 = array2.length;
  //console.log(s1+s2);
  if (s1 != s2)
    return false;

  for(let i=0;i<s1;i++)
    if (array1[i]!==array2[i]){
      console.log(array1[i],array2[i]);
      return false;
    }

  return true;

}
var j = [1,2,"hello"];
console.log(array_compare(j,[1,2,"hello"]));
console.log(a.toString()===[1,2,{}].toString()); //simple method for checking
                             //if two arrays are equal
console.log(Array.isArray(a)); //check if object is Array or not
console.log(Array.isArray({})); //return false


console.log(a.push(44)); //adds element from last,returns new length
console.log(a.pop());//remove and returns last element
console.log(a.shift()); //removes first element,shifts other elements
                   //at lower index  and returns the removed element
console.log(a.unshift(54)); //add element at first index and unshift other
                      //elements at a higher index,returns new array length



delete a[0]; //will set first element to undefined,not good practice
            //,use pop and shift instead
console.log(a);

var deleted_array = a.splice(2,1,'bhutto','ik');
                                            //fist arg = index at which elements
                                             //are added or start added(multiple
                                             //elements)
                                            //2nd arg = tells number of elements
                                            //to be deleted from the position
                                            //remaining arg = elements to be added
                                            //splice mutates the array and returns
                                            //the array of deleted elements
console.log(deleted_array,a);

console.log(a.concat(deleted_array,[55,65])); //concat concatenates 2 or more given
                                        //arrays,given as comma seperated args,
                                        //always returns a new array,not mutates
                                        //original array
console.log(a.slice(1)); //same as array[2:] in python
console.log(a.slice(1,3));//same as array[2:5] in python
console.log(a.slice());
var n = [1,3,-2,-4,0,44];
var copy = n.slice();
n.sort(); //default in ascending order
copy.sort((a,b)=>b-a) //to sort in descending order or any other custom order
                //we have to provide a compare function as sort argument
                //sort will callback the compare function for each comparision
                //if comparision result <0 == a is sorted before b
                //if comparision result >0 == b is sorted before a
                //else no change in order
console.log(n,copy);

console.log(Math.min.apply(null,n)); //for finding min in array
console.log(Math.max.apply(null,n)); //for finding max in array


n.forEach((value,index,array)=>console.log(value)); //call given function for each
                                               // array element
var double = n.map((value,index,array)=>value*2); //call given function for each
                                          //array element and return new array
function sum(prev,value,index,arr){
  return prev+value;
}
var test = n.filter((value)=>value!=0);//call given test function for each
                                          //array element to perform on each
                                          //array element and return new filtered
                                          //array
var sum = n.reduce(sum); //reduce can also take 2nd arg of prev/initial value
console.log(double,test,sum);

console.log(n.every((value,index,arr)=>value>0)); //checks each element against
                                              //test function,and if any element
                                              //fails condition,every return false
console.log(n.some((value,index,arr)=>value>0)); //checks each element against
                                              //test function,and if any element
                                              //passes condition,some return true

n.push(1);
console.log(n);
console.log(n.indexOf(1)); //checks from beginning,2nd arg is start:optional,
                          //returns -1 if not found
console.log(n.lastIndexOf(1)); //checks from last,2nd arg is start:optional,
                          //returns -1 if not found

console.log(n.find((value,index,array)=>value==0)); //returns element which
                                                //passes the given test function
console.log(n.findIndex((value,index,array)=>value==0)); // /returns index of element
                                             //which//passes the given test function   
