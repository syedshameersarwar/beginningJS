console.log('***Events***');



var e = document.getElementById("h");
/*
(function (element,msg){
    element.innerHTML = msg;
})(e,"new world order");
*/

(function (element,msg){
  var new_el = document.createElement('li');
  new_el.textContent = msg;
  element.appendChild(new_el);
})(e,"nayi dunya");



var button = document.getElementById('b');
/*
button.addEventListener('click',function(){
  (function (element,msg){
    var new_el = document.createElement('li');
    new_el.textContent = msg;
    element.appendChild(new_el);
  })(this,"fazuldunya");
});
*/
var elt = document.getElementById('h2');
document.body.addEventListener('click',function(){
  (function (element,msg){
    var new_el = document.createElement('li');
    new_el.textContent = msg;
    element.appendChild(new_el);

  })(elt,"fazuldunya");
});
//To add a new element to the HTML DOM, you must create the element
//(element node) first, and then append it to an existing element.
//you cant append to an element which is not present in HTMl code
//before the js script start to execute
