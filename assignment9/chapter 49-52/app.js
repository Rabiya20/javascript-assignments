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

function showcont() {
    var showP = document.getElementById("hidden-para");
    showP.style.visibility = "visible";
    var btn = document.getElementById("btnshow");
    btn.style.visibility = "hidden";
}


//task 3
var selectRow = null;

function addrec() {
    var formData = readData();
    if (selectRow == null) {
        insertRec(formData);
    }
    else {
        updateData(formData);
    }
    resetForm();
}

function readData() {
    var fullName = document.getElementById("full-name").value;
    var clas = document.getElementById("class").value;
    var reg = document.getElementById("reg").value;
    var grade = document.getElementById("grade").value;
    var cell = document.getElementById("cell").value;

    var data = [fullName, clas, reg, grade, cell];
    return data;
}

function insertRec(datas) {
    var table = document.getElementById("stud-rec").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = datas[0];

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = datas[1];

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = datas[2];

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = datas[3];

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = datas[4];

    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "<button onclick='editData(this)' class='btn btn-primary'>Edit</button><button onclick='deleteData()' class='btn btn-danger'>Delete</button>";
}

function resetForm() {
    document.getElementById("full-name").value = "";
    document.getElementById("class").value = "";
    document.getElementById("reg").value = "";
    document.getElementById("grade").value = "";
    document.getElementById("cell").value = "";
    var selectRow = null;

}

function editData(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("full-name").value = selectRow.cells[0].innerHTML;
    document.getElementById("class").value = selectRow.cells[1].innerHTML;
    document.getElementById("reg").value = selectRow.cells[2].innerHTML;
    document.getElementById("grade").value = selectRow.cells[3].innerHTML;
    document.getElementById("cell").value = selectRow.cells[4].innerHTML;
}

function updateData(formData) {
    selectRow.cells[0].innerHTML = formData[0];
    selectRow.cells[1].innerHTML = formData[1];
    selectRow.cells[2].innerHTML = formData[2];
    selectRow.cells[3].innerHTML = formData[3];
    selectRow.cells[4].innerHTML = formData[4];

}

function deleteData() {
    var td = event.target.parentNode;
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}
// chap 49-52 complete