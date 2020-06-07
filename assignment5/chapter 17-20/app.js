// task 1
var multiDimArray = [["Rabia", " Mithani"], [" Haseeb", " Memon"], [" Sawli", " Khan"]];


// task 2
var matrix = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];
var a, b;
document.write("Multidimentional Matrix<br>");
for(a = 0; a <= 2; a++) {
    for(b = 0; b <= 3; b++) {
        document.write(matrix[a][b]);
    }
    document.write("<br>");
}
document.write("<br><br>");



// task 3
document.write("<h2>Counting:</h2>");
for(a=1; a<=10; a++){
document.write(a+"</br>");
}
document.write("<br/>");


// task 4
var tableNum = +prompt("Enter a number to show its multiplication table",5);
var length = +prompt("Enter length of multiplication table",10);
document.write("Multiplication table of "+tableNum+"<br>");
document.write("Length "+length+"<br><br>");
for(b = 1; b<=length; b++){
    document.write(tableNum + " x " + b + " = " + tableNum*b + "<br>");
}


// task 5
document.write("<br><br>FRUITS<br>");
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(a = 0; a<fruits.length; a++){
    document.write(fruits[a]+ "<br>");
}

document.write("<br><br>");
for(b = 0; b<fruits.length; b++){
    document.write("Elements at index " + b + " is " + fruits[b]+ "<br>");
}



// task 6
var a,b,c,d,e;
//a
document.write("<h1>Counting:</h1>");
for(a=1; a<=10; a++){
document.write(a+", ");
}
document.write("<br/>");


//b
document.write("<h1>Reverse Counting:</h1>");
for(b=10; b>0; b--){
document.write(b+", ");
}
document.write("<br/>");


//c
document.write("<h1>Even:</h1>");
for(c=0; c<=20; c++){
    if(c%2==0){
        document.write(c+", ");
    }
}
document.write("<br/>");


//d
document.write("<h1>Odd:</h1>");
for(d=0; d<=20; d++){
    if(d%2==1){
        document.write(d+", ");
    }
}
document.write("<br/>");


//e
document.write("<h1>Series:</h1>");
for(e=1; e<=20; e++){
    if(e%2==0){
        document.write(e+"k, ");
    }
}
document.write("<br/>");




// task 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var match = "no";
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var find = 0; find<=A.length; find++){
    if(A[find]==search){
        var index = find;
        match = "yes";
    }
}
if(match=="yes"){
    alert(search + " is available at index " + index + " in our bakery");
}
else{
    alert("Sorry "+ search +" is not available in our bakery");
}



// task 8
var numArray = [24, 53, 78, 91, 12];
// array items 
document.write("<br><br>Array items: ");
for(a = 0; a<numArray.length; a++){
    document.write(numArray[a] + ", ");
}
// largest number 
for(b = 0; b<numArray.length; b++){
    if(numArray[b+1]>numArray[b]){
        var largeNum = numArray[b+1];
    }
}
document.write("<br>The largest number is "+ largeNum);



// task 9
var numArray2 = [24, 53, 78, 91, 12];
// array items 
document.write("<br><br>Array items: ");
for(a = 0; a<numArray2.length; a++){
    document.write(numArray2[a] + ", ");
}
// smallest number 
for(b = 0; b<numArray2.length; b++){
    if(numArray2[b+1]<numArray2[b]){
        var smallNum = numArray2[b+1];
    }
}
document.write("<br>The Smallest number is "+ smallNum);

document.write("<br><br>");



// task 10
var range;
for(range = 1; range<=100; range++){
    if(range%5==0){
    document.write(range+", ");
    }
}


// chapter 17-20 complete 