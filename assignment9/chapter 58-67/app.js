//task 1
    // i
var parentnode = document.getElementById("main-content");
    // ii
document.write("<h2>Child elements of main-content</h2>");
var childList = parentnode.children;
console.log(childList);
for(var i = 0; i<childList.length; i++){
    document.write(childList[i]+"<br>");
    console.log(childList[i]);
}
    // iii
document.write("<br><h2>class Render values:</h2>");
var childValues = document.getElementsByClassName("render");
for(var i = 0; i<childList.length; i++){
    document.write(childValues[i].innerHTML+"<br>");
    console.log(childValues[i].innerHTML);
}
    // iv
function changeValue(){
    var fname = document.getElementById("first-name");
    childList[0].innerHTML = "First Name : "+fname.value;
    // v
    var lname = document.getElementById("last-name");
    childList[1].innerHTML = "Last Name : "+lname.value;

    var email = document.getElementById("email");
    childList[2].innerHTML = "Email : "+email.value;
}


//task 2
document.write("<h2>Form Content</h2>");
    // i
var formParent = document.getElementById("form-content");
document.write("Node type of form-content "+formParent.nodeType+"<br>");
    // ii
var lastname = document.getElementById("lastName");
document.write("Node type of last name "+ lastname.nodeType+"<br>");
var lchild = lastname.firstChild;
document.write("Node type of child of last name "+ lchild.nodeType+"<br>");
    // iii
var newLName = lchild.innerHTML = "John"
document.write("Updated last name is "+ newLName);
    // iv
var child1 = document.getElementById("main-content").firstChild;
var chlid2 = document.getElementById("main-content").lastChild;
    // v
var nextSib = lastname.nextSibling;
var prevSib = lastname.previousSibling;
    //  vi
var parentOfEmail = email.parentnode;
var nodetypeOdEmail = email.nodeType;


// chap 58-67 complete