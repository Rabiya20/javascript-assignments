var list = document.getElementById("todoList");


function addTodo(){
    //create list items -> li tag with its text node
    var totoItem = document.getElementById("todoItem");
    var li = document.createElement("li");
    var liText = document.createTextNode(totoItem.value);
    li.appendChild(liText);
    li.setAttribute("class","list-unstyled")


    //delete button
    var delBtn = document.createElement("button"); 
    var detText = document.createTextNode("DELETE");
    delBtn.setAttribute("class", "btn btn-danger m-2");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.appendChild(detText);


    //edit button
    var editBtn = document.createElement("button"); 
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class", "btn btn-info m-2");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(editText);

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    



    list.appendChild(li);
    totoItem.value = "";
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter new value", val);
    e.parentNode.firstChild.nodeValue = editVal;
}


function deleteItem(e){
    e.parentNode.remove();
}

function delAll(){
    list.innerHTML = "";
}