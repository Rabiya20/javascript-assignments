function getNum(num){
    var result = document.getElementById("result-value");
    result.innerHTML += num;
}

function clearAll(){
    var result = document.getElementById("result-value");
    result.innerHTML = "";
}

function getResult(){
    var result = document.getElementById("result-value");
    result.innerHTML = eval(result.innerHTML);  
}