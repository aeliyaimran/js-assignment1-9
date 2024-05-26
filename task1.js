//chapter 1
// Variables

var greeting = "Hello, World!";
var number = 42;
var isJavaScriptFun = true;

// Function to show an alert
function showAlert() {
    alert(greeting);
}

// Function to write text to the HTML document
function writeToDocument() {
    document.getElementById("demo").innerHTML = "JavaScript is fun!";
}
//chapter 2
// // 1
var username;

// // 2
 var myName = 'aeliya';

// // 3-a
 var message;

 //3-b
 message = 'Hello world';

// // 3-c
 alert(message);

// // 4
var name = 'John Doe';
var age = '15 Years Old';
var enrolled = 'Certified Mobile Application Development';

 alert(name);
 alert(age);
 alert(enrolled);

// // 5
 alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

// // 6
 var email = 'aeliyanaqvi19@gmail.com';
 var str0 = 'My email is';
alert(str0 + ' ' + email);

// // 7
document.write('<h1>Hello</h1><p>I Can write html thgough JS</p>');

// // 8
 var str1 = '“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”';
 alert(str1);

      
    //chapter 3
     // 1
     var age = 28;
     alert("I am "+age+" years old.");

        // // 2
     var timesVisited = 14;
     alert("You have visited this site "+timesVisited+" times.");

        // // 3
     var birthYear = 1995;
     document.write("My birth year is "+birthYear+"<br/>");
     document.write("Data type of my declared variable is "+typeof birthYear);

        // // 4
     var visitorName = "John Doe";
     var productTitle = "T-Shirt(s)";
     var qty = 5;
     var storeName ="XYZ Clothing store";
     document.write("<b>"+visitorName+"</b> ordered <b>"+qty+" "+productTitle+"</b> on "+storeName)
     //chapter4
     // // 1
         var a=1 , b=2 , c=3;
         console.log(a,b,c)

        // // 2
        // // five Legal variables
        var fname = "aeliya imran";
        var lastName = "naqvi";
        var _age = 23;
        var $birthYear = 1998;
        var Batch = 2;

        // five Illegal Variables
        var fname = "First Name";
        var obt = 98;
        var class_missing = "WMA";
        var class_missing = true;

        // // 3
         document.write("<h1>Rules for naming JS Variables</h1>");
         document.write("<br/>")
         document.write("Variable names can only contain 'numbers', '$'' and '_' for Example : $my_1stVariable");
         document.write("<br/>")
         document.write("Variable must begin with a 'letter', '$'' or '_' . for Example : $name, _name or name");
         document.write("<br/>")
         document.write("Variable names are case sensitive");
         document.write("<br/>")
         document.write("Variable names should not be JS Keywords");
         //chapter 5
         // // 1
     var a = parseInt(prompt("Enter first value"));
     var b = parseInt(prompt("Enter second value"));
     var z = a+b;
     document.write("Sum of "+a+" and "+b+" is "+z);

        // // 2
     var a = parseInt(prompt("Enter first value"));
     var b = parseInt(prompt("Enter second value"));
     var _add = a+b;
     var _sub = a-b;
     var _mul = a*b;
     var _div = a/b;
     var _mod = a%b;
     document.write("Sum of "+a+" and "+b+" is "+ _add + "<br/>");
     document.write("Subtraction of "+a+" and "+b+" is "+ _sub + "<br/>");
    document.write("Multiplication of "+a+" and "+b+" is "+ _mul + "<br/>");
     document.write("Division of "+a+" and "+b+" is "+ _div + "<br/>");
     document.write("Modulus of "+a+" and "+b+" is "+ _mod + "<br/>");
        
        // // 3
     var a;
     document.write("Value after variable declaration is: "+ a + "<br/>");
     a = 5;
     document.write("Initial value: "+ a + "<br/>");
     a++;
     document.write("Value after increment is: "+ a + "<br/>");
     a = a+7;
     document.write("Value after addition is: "+ a + "<br/>");
     a--;
     document.write("Value after decrement is: "+ a + "<br/>");
     a = a%3;
     document.write("Remainder is: "+ a + "<br/>");

        // // 4
     var ticketCost = 600;
     var ticketQty = 5;
     var totalCost = ticketCost*ticketQty;
     document.write("Total cost to buy "+ticketQty+" tickets to a movie is "+totalCost+"PKR");

        // // 5
     var tableOf = parseInt(prompt("Type a number to print the table"));
     document.write(tableOf + " x 1 = " + tableOf*1 + "</br>");
     document.write(tableOf + " x 2 = " + tableOf*2 + "</br>");
     document.write(tableOf + " x 3 = " + tableOf*3 + "</br>");
     document.write(tableOf + " x 4 = " + tableOf*4 + "</br>");
     document.write(tableOf + " x 5 = " + tableOf*5 + "</br>");
     document.write(tableOf + " x 6 = " + tableOf*6 + "</br>");
     document.write(tableOf + " x 7 = " + tableOf*7 + "</br>");
     document.write(tableOf + " x 8 = " + tableOf*8 + "</br>");
     document.write(tableOf + " x 9 = " + tableOf*9 + "</br>");
     document.write(tableOf + " x 10 = " + tableOf*10 + "</br>");

        // // 6
     var tempInCen = 39;
     var tempInFar = 105;

     var farToCen = (tempInCen*9/5)+32
     var cenToFar = (tempInFar-32)*5/9;

     document.write(tempInCen+"<sup>o</sup>C is "+cenToFar.toFixed(1)+"<sup>o</sup>F");
     document.write("<br/>");
     document.write(tempInFar+"<sup>o</sup>F is "+farToCen.toFixed(1)+"<sup>o</sup>C");

        // // 7
     var itemOnePrice = 650;
     var itemOneQty = 3;
     var itemTwoPrice = 100;
     var itemTwoQty = 7;
     var shipping = 100;
     var totalBill = ((itemOnePrice*itemOneQty)+(itemTwoPrice*itemTwoQty))+100;
     document.write("<h1>Shopping Cart</h1>");
     document.write("Price of item 1 is : "+itemOnePrice + "<br/>");
     document.write("Quantity of item 1 is : "+itemOneQty + "<br/>");
     document.write("Price of item 2 is : "+itemTwoPrice + "<br/>");
     document.write("Quantity of item 2 is : "+itemTwoQty + "<br/>");
     document.write("Shipping Charges : "+shipping + "<br/>");
     document.write("Total cost of your order is : "+totalBill + "<br/>");

        // // 8
     var marksTotal = 980;
     var marksObtained = 804;
     var perObtained = (marksObtained/marksTotal)*100;
    document.write("<h1>Marks Sheet</h1>");
     document.write("Percentage "+perObtained);

        // // 9
     var dollars = 10;
     var riyal = 25;
    //current rates dollar = 221.55 and riyal = 58.97
     var dollarToPkr = 10*221.55;
     var riyalToPkr = 25*58.97;
     var totalCurrency = dollarToPkr+riyalToPkr;
     document.write("<h1>Currency in PKR</h1>");
     document.write("Total Currency in PKR : "+totalCurrency.toFixed());

        // 10
     var a = 10;
     a=((a+5)*10)/2;
     document.write(a);

        // // 11
     var currYear = 2024;
     var birthYear = 1995;
     var ageOne = (currYear-birthYear);
     var ageTwo = (currYear-birthYear)-1;
     document.write("<h1>Age Calculator</h1>");
     document.write("Current Year : "+currYear+"<br/>");
     document.write("Birth Year : "+birthYear+"<br/>");
     document.write("Your age is : "+ageOne+" or "+ageTwo+"<br/>");

        // // 12
     var r = 20;
     var n = 3.142;
     var c = (2*n)*r;
     var a = n*r**2;
     document.write("<h1>The Geometrizer</h1>");
     document.write("Radius of a circle : "+r+"<br/>");
     document.write("The circumference is : "+c+"<br/>");
     document.write("The Area is : "+a+"<br/>");

        // // 13
     var favSnack = "Fries";
     var myAge = 28;
     var maxAge = 70;
     var perDay = 2;
     var estSnacks = (maxAge-myAge)*perDay;
     document.write("Favourite Snack : "+favSnack+"<br/>");
     document.write("Current Age : "+myAge+"<br/>");
     document.write("Estimated Maximum age : "+maxAge+"<br/>");
     document.write("Amount of snacks per day : "+perDay+"<br/>");
     document.write("You will need "+estSnacks+" "+favSnack+" to last you until the ripe old age of "+maxAge);
    // chapter 6_9
     // // 1
    var a = 10;
     document.write("Result : "+"<br/>");
     document.write("The value of a is :"+a+"<br/>");
     document.write("..................................... <br/>"+"<br/>");

     document.write("The value of ++a is : "+ ++a +"<br/>");
     document.write("Now the value of a is : "+a+"<br/>"+"<br/>");

     document.write("The value of a++ is : "+ a++ +"<br/>");
     document.write("Now the value of a is : "+a+"<br/>"+"<br/>");

     document.write("The value of --a is : "+ --a +"<br/>");
     document.write("Now the value of a is : "+a+"<br/>"+"<br/>");

     document.write("The value of a-- is : "+ a-- +"<br/>");
     document.write("Now the value of a is : "+a+"<br/>"+"<br/>");

        // 2
     var a = 2, b = 1;
     var result = --a - --b + ++b + b--;
     --a >> 1
     --a - --b >> 1 - 0
     --a - --b + ++b >> 1 - 0 + 1
     --a - --b + ++b + b-- >> 1 - 0 + 1 + 1
     any = 3
     document.write("a is : "+a+"<br/>");
     document.write("b is : "+b+"<br/>");
     document.write("Result is : "+result)

        // // 3
     var userName = prompt("Write your name");
     alert("Welcome to website "+userName);

        // 4 - 5
     var tableOf;
     console.log(tableOf);
     tableOf = prompt("Write a number to print a table ", 5);
    if (tableOf == null || tableOf == undefined || tableOf == '') {
     tableOf = 5;
     document.write(tableOf + " x 1 = " + tableOf * 1 + "</br>");
     document.write(tableOf + " x 2 = " + tableOf * 2 + "</br>");
     document.write(tableOf + " x 3 = " + tableOf * 3 + "</br>");
     document.write(tableOf + " x 4 = " + tableOf * 4 + "</br>");
     document.write(tableOf + " x 5 = " + tableOf * 5 + "</br>");
     document.write(tableOf + " x 6 = " + tableOf * 6 + "</br>");
     document.write(tableOf + " x 7 = " + tableOf * 7 + "</br>");
     document.write(tableOf + " x 8 = " + tableOf * 8 + "</br>");
     document.write(tableOf + " x 9 = " + tableOf * 9 + "</br>");
     document.write(tableOf + " x 10 = " + tableOf * 10 + "</br>");
     } else {
    document.write(tableOf + " x 1 = " + tableOf * 1 + "</br>");
    document.write(tableOf + " x 2 = " + tableOf * 2 + "</br>");
    document.write(tableOf + " x 3 = " + tableOf * 3 + "</br>");
     document.write(tableOf + " x 4 = " + tableOf * 4 + "</br>");
     document.write(tableOf + " x 5 = " + tableOf * 5 + "</br>");
     document.write(tableOf + " x 6 = " + tableOf * 6 + "</br>");
     document.write(tableOf + " x 7 = " + tableOf * 7 + "</br>");
     document.write(tableOf + " x 8 = " + tableOf * 8 + "</br>");
     document.write(tableOf + " x 9 = " + tableOf * 9 + "</br>");
     document.write(tableOf + " x 10 = " + tableOf * 10 + "</br>");
     }

        // 6
         var sub_one = prompt("Enter First subject name : ");
         var sub_two = prompt("Enter Second subject name : ");
         var sub_three = prompt("Enter Third subject name : ");
        
         var sub_one_max_marks = 100;
         var sub_two_max_marks = 100;
         var sub_three_max_marks = 100;
        
         var sub_one_obt = parseInt(prompt("Enter marks Obtained for "+sub_one));
         var sub_two_obt = parseInt(prompt("Enter marks Obtained for : "+sub_two));
         var sub_three_obt = parseInt(prompt("Enter marks Obtained for: "+sub_three));
       
         var sub_one_per = (sub_one_obt/sub_one_max_marks)*100;
         var sub_two_per = (sub_two_obt/sub_two_max_marks)*100;
         var sub_three_per = (sub_three_obt/sub_three_max_marks)*100;
        
         var net_total_marks = (sub_one_max_marks + sub_two_max_marks + sub_three_max_marks);
         var net_total_obt = (sub_one_obt + sub_two_obt + sub_three_obt);
         var net_total_per = (sub_one_per + sub_two_per + sub_three_per);
         document.write("<table>");
             // Heading Row
        document.write("<tr>");
        document.write("<td>");
        document.write("<b>Subject</b>");
        document.write("</td>");
         document.write("<td>");
        
        document.write("<b>Total Marks</b>");
        document.write("</td>");
        
                 document.write("<td>");
                     document.write("<b>Obtained Marks</b>");
                 document.write("</td>");
                 document.write("<td>");
                document.write("ُ<b>percentage</b>");
        //         document.write("</td>");
             document.write("</tr>");
        //     // Subject one Row
             document.write("<tr>");
                 document.write("<td>");
                     document.write(sub_one);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_one_max_marks);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_one_obt);
                document.write("</td>");
                 document.write("<td>");
                     document.write(sub_one_per+"%");
                 document.write("</td>");
             document.write("</tr>");
        //     // Subject two row
             document.write("<tr>");
                 document.write("<td>");
                     document.write(sub_two);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_two_max_marks);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_two_obt);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_two_per+"%");
                 document.write("</td>");
         document.write("</tr>");
        //     // Subject three row
             document.write("<tr>");
                 document.write("<td>");
                     document.write(sub_three);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_three_max_marks);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_three_obt);
                 document.write("</td>");
                 document.write("<td>");
                     document.write(sub_three_per+"%");
                 document.write("</td>");
             document.write("</tr>");
             // Totals row
             document.write("<tr>");
                 document.write("<td>");
                     document.write("");
                 document.write("</td>");
                 document.write("<td>");
                     document.write("<b>"+net_total_marks+"</b>");
                 document.write("</td>");
                 document.write("<td>");
                     document.write("<b>"+net_total_obt+"</b>");
                 document.write("</td>");
                document.write("<td>");
        document.write("<b>"+net_total_per+"%"+"</b>");
        document.write("</td>");
        document.write("</tr>");
        document.write("</table>");
