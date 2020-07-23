//task 1
function power(a,b){
    var power = Math.pow(a,b);
    document.write("Value of the number "+ a +" to the power of "+ b +" is <b>" + power + "</b><hr>");
}
var int1 = +prompt("Enter a number to find its power");
var int2 = +prompt("Enter power value");
power(int1, int2);



//task 2
function leapyear(year){
    if((year % 100 === 0) || (year % 400 === 0) || (year % 4 === 0)){
        document.write(year +" is a leap year <hr>")
    }
    else{
        document.write(year +" is not a leap year <hr>")
    }
}
var year = +prompt("Enter any year to find whether it is leap year or not");
leapyear(year);

//task 3
var a = +prompt("Enter value of side a");
var b = +prompt("Enter value of side b")
var c = +prompt("Enter value of side c");
//function 1
function sides(a,b,c){
    var S = (a+b+c)/2;
    return S;
}
//function 2
function area() {
    var S = sides(a,b,c);

	var area = Math.sqrt(S*(S-a)*(S-b)*(S-c));
    return area;
}
// call area();
document.write("Area of triangle is "+area()+"<hr>");



//task 4
var marks = [];
var obtMarks=0;
var perc = 0;
var totalMarks = 300;

// 1st function for average
function average(){
    for(var i = 0; i < 3; i++) {
        marks[i]= +prompt("Enter marks for subject "+(i+1));
        obtMarks += marks[i];
    }
    var avg = obtMarks / 3;
    return Math.floor(avg);
}

// 2nd function for percentage
function percentage(){
    var perc = (obtMarks/totalMarks)*100;
    return perc.toFixed(2);
}

// 3rd function for main result
function result(){
    // var average = average();
    document.write("Average marks are: <b>"+ average() +"</b><br>");

    // var percentage = percentage();
    document.write("Percentage of marks is: <b>"+ percentage() +"%</b><br>");
}
result();




//task 5
var str = prompt("Enter any String sentence");
document.write("Sentence: "+str+"<br>");

var val = prompt("Enter character to find its index number");
document.write("Character to find: "+val+"<hr>");

function indexof(str, find){
    var S = str;
    var F = find;
    var i=0;
    var count = 0;

    while(i < S.length){
        if(S[i]==F){
            count = (count+1) + i;
            break;
        }
        i++;
    }
    if(count!=0){
        return count;
    }
    else{
        alert("this character not found!");
    }
}

document.write(indexof(str,val));
document.write("<hr>");


//task 6
function deleteVowel(str) {
    var sent = str.split('');
    document.write("Originial sentence is:<br><b>" + str + "</b><br>");
    for (var i = 0; i < sent.length; i++) {
        switch (sent[i]) {
            case 'a':
                sent[i] = '';
            case 'e':
                sent[i] = '';
            case 'i':
                sent[i] = '';
            case 'o':
                sent[i] = '';
            case 'u':
                sent[i] = '';
        }
    }
    var newSent = sent.join("");
    document.write("After removing vowel sentence is:<br><b>" + newSent + "</b><hr>");
}
var sent = prompt("Enter a long sentence (limit 25 characters)");
deleteVowel(sent);




//task 7
var sent = prompt("Enter a long sentence (limit 25 characters)");
var found = 0;
var count = 0;
function isVowel(v) {
    switch (v) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return true;
        default:
            return false;
    }
}
for(var i = 0; i<sent.length; i++){
    if(isVowel(sent[i])){
        found++;
    }
    else{
        found = 0;
    }

    if(found == 2){
        document.write(sent[i-1], sent[i]+" ");
        found=1;
        count++
    }
}
document.write("<br>Sentence is: "+sent);
document.write("<br>Total number of occurances is "+ count++ +"<hr>");




//task 8
var km = +prompt("Enter distance between two cities (in km)");
document.write("Kilometers: "+km+"km<br>");

function meter(km){
    var met = km*1000;
    document.write("Meters: "+met+"m<br>");
}

function feet(km){
    var feet = km*3280.8;
    document.write("Feets: "+feet.toFixed(2)+"ft<br>");
}

function inch(km){
    var inch = km*39370;
    document.write("Inches: "+inch+"in<br>");
}

function centi(km){
    var centi = km/100000;
    document.write("Centimeters: "+centi+"cm<hr>");
}

meter(km);
feet(km);
inch(km);
centi(km);




//task 9
var hours, count = 1, overTime = 0;
hours = +prompt("Enter number of hours, employee has worked");
document.write("Hours of working are "+ hours+"<br>");

if(hours>40){
    overTime = hours-40;
    document.write("Overtime pay is Rs. "+ overTime*12+"<hr>");
}
else{
    document.write("Number of hours of employee is less than  40, so no overtime pay<hr>");
}



//task 10
var denominations = [100, 50, 10];
var amount = +prompt("Enter amount to withdraw");
document.write("Entered amount is: "+amount+"<br>");
var temp=amount;
for(var i=0; i<3; i++){
    document.write(denominations[i] + " Notes is: " + Math.floor(temp/denominations[i]) +"<br>");
    temp = temp % denominations[i];
}
document.write("<hr>")

// chap 38-42 complete