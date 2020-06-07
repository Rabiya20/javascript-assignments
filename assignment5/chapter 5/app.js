// task 1
var number1 = 3;
var number2 = 5;

var result1 = number1 + number2;
document.write("Sum of " + number1 + " and " + number2 + " is " + result1 + "</br>");


// task 2
var result2 = number2 - number1;
document.write("Subtraction of " + number2 + " and " + number1 + " is " + result2 + "</br>");

var result3 = number1*number2;
document.write("Multiplication of " + number1 + " and " + number2 + " is " + result3 + "</br>");

var result4 = number1/number2;
document.write("Division of " + number1 + " and " + number2 + " is " + result4 + "</br>");

var result5 = number2%number1;
document.write("Modulus of " + number2 + " and " + number1 + " is " + result5 + "</br></br></br>");


// task 3
// a 
var a;
// b 
document.write("Value after variable declaration is: <b>"+ a +"</b></br>");
// c
b = 5;
// d 
document.write("Initial value is: " + b + "</br>");
// e 
b = b++;
// f 
document.write("Value after increment is: " + b + "</br>");
// g 
b = b + 7;
// h 
document.write("Value after addition is: "+b+"<br>");
// i 
b = b--;
// j 
document.write("Value after decrement is:" + b + "</br>");
// k 
b = b%3;
// l 
document.write("The reminder is: " + b + "</br></br>");


// task 4
var ticketPrice = 600;
var ticketQuantity = 5;
document.write("Total cost of buy " + ticketQuantity + " tickets to a movie is " + ticketPrice*ticketQuantity + " PKR</br></br>");


// task 5
var table = 4;
document.write("<b>Table of " + table + ":</b></br>");
document.write(table + " X " + 1 + " = " + table*1 + "</br>"  );
document.write(table + " X " + 2 + " = " + table*2 + "</br>"  );
document.write(table + " X " + 3 + " = " + table*3 + "</br>"  );
document.write(table + " X " + 4 + " = " + table*4 + "</br>"  );
document.write(table + " X " + 5 + " = " + table*5 + "</br>"  );
document.write(table + " X " + 6 + " = " + table*6 + "</br>"  );
document.write(table + " X " + 7 + " = " + table*7 + "</br>"  );
document.write(table + " X " + 8 + " = " + table*8 + "</br>"  );
document.write(table + " X " + 9 + " = " + table*9 + "</br>"  );
document.write(table + " X " + 10 + " = " + table*10 + "</br></br>");


// task 6
// a 
var celcius = 25;
// b
var fern = (celcius*9/5)+32;
document.write(celcius + "<sup>o</sup>C is " + fern + "oF </br>");
// c 
var fahrenhiet = 70;
// d 
var cent = (fahrenhiet-32)*5/9;
document.write(fahrenhiet + "<sup>o</sup>F is " + cent + "oC</br></br>");


// task 7
// a 
var item1 = 650;
// b 
var item2 = 100;
// c 
var orderQuantity1 = 3;
// d 
var orderQuantity2 = 7;
// e 
var charges = 100;
var itemQuantity1 = item1*orderQuantity1;
var itemQuantity2 = item2*orderQuantity2; 
document.write("<h1>Shopping Cart</h1><br><br><br>")
document.write("Price of Item 1 is " + item1 + "</br>");
document.write("Quantity of Item 1 is " + orderQuantity1 + "</br>");
document.write("Price of Item 2 is " + item2 + "</br>");
document.write("Quantity of Item 2 is " + orderQuantity2 + "</br>");
document.write("Shipping Charges " + charges + "</br></br>");
document.write("Total cost of your order is " + itemQuantity1+itemQuantity2+charges + "</br></br>");


// task 8
var totalMarks = 980;
var obtainMarks = 804;
var percentage = obtainMarks/totalMarks*100;
document.write("<h1>Marks Sheet</h1></br></br>");        
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtainMarks + "</br>");
document.write("Percentage: " + percentage + "%</br></br>");


// task 9
var dollar = 104.80;
var riyal = 28;
var pakistaniRs = (dollar*10)+(riyal*25);
document.write("<h1>Currency in PKR</h1></br></br>");
document.write("Total Currency in PKR:" + pakistaniRs);


// task 10
var num = 3;
var arithmetic = ((num+5)*10)/2;
document.write("Arithmetic answer of ((num+5)*10)/2 is: " + arithmetic);
 

// task 11
// a 
var currentYear = 2020;
// b 
var birthYear = 1997;
// c 
var age = currentYear-birthYear;
document.write("<h1>Age Calculator</h1></br></br>");        
document.write("Current Year: " + currentYear + "</br>");
document.write("Birth Year: " + birthYear + "</br>");
document.write("Your Age is : " + age + "</br></br>");


// task 12
// a 
var radius = 20;
// b 
var circumference = 2*3.142*radius;
// c 
var area = 3.142*(radius*radius);
document.write("<h1>The Geometrizer</h1></br></br>");        
document.write("Radius of a circle: " + radius + "</br>");
document.write("The Circumference is: " + circumference + "</br>");
document.write("The area is: " + area + "</br></br>");


// task 13
// a 
var favSnake = "Cookies";
// b 
var currentAge = age;
// c 
var maxAge = 65;
// d 
var estAmount = 3;
// e 
var supply = (maxAge-currentAge)*estAmount;
document.write("<h1>The Lifetime Supply Calculator</h1></br></br></br>");        
document.write("Favourite Snake: " + favSnake + "</br>");
document.write("Current age: " + currentAge + "</br>");
document.write("Estimated Maximum Age: " + maxAge + "</br>");
document.write("Amount od snake per day: " + maxAge + "</br>");
document.write("“You will need " + supply + " to last you until the ripe old age of " + maxAge + "</br>");


// chapter 5 complete