//task 1
function clicked(){
    alert("Hello from link");
}


//task 2
function msg(){
    alert("Thank you for purchasing mobile phone");
}

//task 3
function SomeDeleteRowFunction() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}


//task 4
function changeimg(){
    var img = document.getElementById("bulb-on");
    img.src = "bulbon.jpg";
}
function againimg(){
    var img = document.getElementById("bulb-on");
    img.src = "bulboff.jpg";
}


//task 5
function increase(){
    var inc = document.getElementById("counter-value").innerHTML;
    inc++;
    document.getElementById("counter-value").innerHTML = inc;
}
function decrease(){
    var dec = document.getElementById("counter-value").innerHTML;
    dec--;
    document.getElementById("counter-value").innerHTML = dec;
}


// chap 43-48 complete