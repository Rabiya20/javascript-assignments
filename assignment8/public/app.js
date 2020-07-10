var min = 0;
var sec = 0;
var msec = 0;
var interval;

var minutes = document.getElementById("min");
var seconds = document.getElementById("sec");
var miliseconds = document.getElementById("msec");

function stopWatch(){
    msec++;
    miliseconds.innerHTML = msec;
    if(msec >= 100){
        sec++;
        seconds.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        sec = 0;
        minutes.innerHTML = min;
    }
    
}


//start
function start(){
    interval = setInterval(stopWatch, 10);
    var startbtn = document.getElementById("start");
    startbtn.disabled = true;
    var pausebtn = document.getElementById("pause");
    pausebtn.disabled = false;
}

//pause
function pause(){
    clearInterval(interval);
    var startbtn = document.getElementById("start");
    startbtn.disabled = false;
    var pausebtn = document.getElementById("pause");
    pausebtn.disabled = true;
}

//reset
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    minutes.innerHTML = min;
    seconds.innerHTML = sec;
    miliseconds.innerHTML = msec;
    pause();
}