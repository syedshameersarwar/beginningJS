console.log("JavaScript: Ways of Output displaying.");

document.write("<br /> 1)Changing HTML contents of attribute.");
document.getElementById("one").innerHTML = "changed";
document.getElementById("one").textContent = "changed similarly"; //same as above

document.getElementById("one").style.fontSize = "35px"; //extra
document.getElementById("one").style.display = "none"; //hiding HTML attributes
document.getElementById("one").style.display = "block";


//global object offered by browser in window,
//document is another global object referenced using window object
//document is DOM (document object model)

document.write("<br /> 2)Using document.write.");
document.write("Way 2.");

console.log("document.write is not preffered,"+
            "as it will delete all the HTML content if"+
            " used after HTML is loaded.");
document.write("<br /> 3) Using alerts(debugging)"); //all the above code is
                                      // executed but not render on browser page
                                      // due to alerts
window.alert("Using alerts");
alert("or alerts directly.."); //same as above
                              // now the browser will render the change before
                              // alerts
document.write("<br /> 4) Finally using console.(Best),see console.");
console.log("Hey!");
