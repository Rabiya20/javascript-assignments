//task 1
function formData() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var city = document.getElementById("city");
    var contact = document.getElementById("contact");

    if (fname != "" && lname != "" && email != "" && contact != "" && city != "") {


        if (contact.value.length == 11) {
            var firstName = document.getElementById("first-name");
            firstName.innerHTML = "First name: <b>" + fname.value + "</b>";

            var lastName = document.getElementById("last-name");
            lastName.innerHTML = "Last name: <b>" + lname.value + "</b>";

            var emailName = document.getElementById("enter-email");
            emailName.innerHTML = "Email: <b>" + email.value + "</b>";

            var cont = document.getElementById("enter-contact");
            cont.innerHTML = "Contact: <b>" + contact.value + "</b>";

            var cityName = document.getElementById("city-name");
            cityName.innerHTML = "City name: <b>" + city.value + "</b>";
        }
        else {
            alert("Contact number should contain 11 digits");
        }
    }
    else {
        alert("fill each field");
    }
}


//task 2
var hidd = document.getElementById("hidden-para");
hidd.style.visibility = "hidden";
var btn = document.getElementById("btnshow");
btn.innerHTML = "Show more..."

function showcont(){
    var showP = document.getElementById("hidden-para");
    showP.style.visibility = "visible";
    var btn = document.getElementById("btnshow");
    btn.style.visibility = "hidden";
}


//task 3
function editData(){
//     var td = event.target.parentNode; 
//     var tr = td.parentNode;
//     tr.parentNode.append(td)
}


function SomeDeleteRowFunction() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}


// chap 49-52 complete