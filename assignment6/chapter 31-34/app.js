// //ques no 1
    // var currentDate = new Date();
    // document.write(currentDate + "<hr /><br/>");

    // //ques no 2
    // var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var currentMonth = currentDate.getMonth();
    // document.write("Current month: " + months[currentMonth] + "<hr /><br/>");

    // //ques no 3
    // var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    // var currentDay = currentDate.getDay();
    // document.write("Today is " + days[currentDay] + "<hr /><br/>");

    // //ques no 4
    // var day;
    // var day = days[currentDay];
    // if(day==days[0] || day==days[6]){
    //     document.write("It's Fun Day<hr /><br/>");
    // }
    // else{
    //     document.write("Working Days<hr /><br/>");
    // }
    
    // //ques no 5
    // var date;
    // if(currentDate<16){
    //     document.write("First fifteen days of the month<hr /><br/>");
    // }
    // else{
    //     document.write("Last fifteen days of the month<hr /><br/>");
    // }

    // //ques no 6
    // var milliSeconds = currentDate.getTime();
    // var minutes = milliSeconds/(1000*60);
    // document.write("Current Date: " + currentDate + "<br/>");
    // document.write("Elapsed milliseconds since January 1, 1970: " + milliSeconds + "<br/>");
    // document.write("Elapsed milliseconds since January 1, 1970: " + minutes + "<hr /><br/>");

    // //ques no 7
    // var time;
    // var hours = currentDate.getHours();
    // if(hours>=0 && hours<12){
    //     document.write("It's A.M<hr /><br/>");
    // }
    // else{
    //     document.write("It's P.M<hr /><br/>");
    // }

    // //ques no 8
    // var laterDate = new Date("jan 31, 2020");
    // document.write(laterDate + "<hr /><br/>");

    // //ques no 9
    // var ramadan = new Date("Jun 18, 2015");
    // var ramadanDays = currentDate - ramadan;
    // var convertDays = ramadanDays/(1000*60*60*24);
    // var exactDays = Math.floor(convertDays);
    // document.write(exactDays + " days have passed since 1st Ramadan, 2015<hr /><br/>");

    // //ques no 10
    // var seconds = new Date("jan 1, 2015");
    // var passSecs = seconds/(1000*60);
    // document.write("On reference date " + currentDate + ",<br/>");
    // document.write(passSecs + " seconds had passed since beginning of 2015<hr /></br>");

    // //ques no 11
    // document.write("current date: " + currentDate + "<br/>");
    // var miliSecIn1Hr = set.hours();
    // var hr1Ago = currentDate-miliSecIn1Hr;
    // document.write("1 hour ago, it was " + currentDate + "<br/>");
    //-------------not complete

    // //ques no 15
    // function hello(){
    //     document.write("Hello World</br>");
    // }

    // hello();
    // hello();

    // //ques no 16
    // function date(){
    //     var now = new Date;
    //     document.write(now + "</br>");
    // }

    // date();
    // date();
    // date();
    // document.write("</hr>");

    // //ques no 17
    // function greeting(firstName, lastName){ 
    //     var greet = firstName + lastName;
    //     var firstName = prompt("Enter your first name");
    //     var lastName = prompt("Enter your last name");
    //     document.write("Hello " + firstName+ " "+lastName+"</br>"); 
    // }
    //    greeting();
    // document.write("</hr>");

    // //ques no 18
    // function sum(num1, num2){
    //     num1 = +prompt("Enter first number");
    //     num2 = +prompt("Enter second number");
    //     return num1+num2;
    // }
    // var num1, num2;
    // var sumOf = sum(num1, num2);
    // document.write("Sum of 2 numbers is "+sumOf+"<br><hr/>");

    // //ques no 19
    // function operation(n1, n2, sign){
    //     n1 = +prompt("Enter first number");
    //     n2 = +prompt("Enter secong number");
    //     sign = prompt("Enter a sign for operation you want\n+ , - , * , / or %");
    //     switch(sign){
    //         case "+" :
    //         return n1+n2;
    //         break;

    //         case "-" :
    //         return n1-n2;
    //         break;

    //         case "*" :
    //         return n1*n2;
    //         break;

    //         case "/" :
    //         return n1/n2;
    //         break;

    //         case "%" :
    //         return n1%n2;
    //         break;

    //         default:
    //         alert("something going wrong");
    //     }
    // }

    // var n1, n2, sign;
    // var result = operation(n1, n2, sign);
    // document.write("Your result is: "+result+"<br><hr/>");

    // //ques no 20
    // function square(sqNum){
    //     sqNum = +prompt("Enter any number to get it's square value");
    //     return sqNum*sqNum;
    // }
    // var sqNum;
    // var numSquare = square(sqNum);
    // document.write("Square of your given num is: "+numSquare+"<br><hr/>");

    //ques no 23
    function hyp(base, perp)
    {
        function sqBsPr(value){
           var value = value*value;
        }  

        base = sqBsPr(base);
        perp = sqBsPr(perp);

        return base+perp;
    }
    var base = +prompt("Enter number of Base");
    var perp = +prompt("Enter number of Perpendicular");

    var hypotenuse = hyp(base, perp);
    alert(hypotenuse);
  //document.write("Result of Hypotenuse is: "+ hypotenuse+ "<br><hr/>");