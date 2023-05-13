// Question_01:
var num_1 = 5;
var num_2 = 3;
var num_3 = num_1 + num_2;
document.write("Sum of  5 and 3 is: " + num_3);


// Question_02:
var num_1 = 5;
var num_2 = 3;
var num_3 = num_1 - num_2;
document.write("Subtraction of  5 and 3 is: " + num_3);

var num_1 = 5;
var num_2 = 3;
var num_3 = num_1 * num_2;
document.write("Multiplication of  5 and 3 is: " + num_3);

var num_1 = 5;
var num_2 = 3;
var num_3 = num_1 / num_2;
document.write("Division of  5 and 3 is: " + num_3);

var num_1 = 5;
var num_2 = 3;
var num_3 = num_1 % num_2;
document.write("Modulus of  5 and 3 is: " + num_3);

// Question_3:
var x;
document.write("Value after variable declaration is : " + x + "<br>");
x = 5;
document.write("Initial value is: " + x + "<br>");
x++;
document.write("Value after increment is : " + x + "<br>")
x = x + 7;
document.write("Value after addition is : " + x + "<br>")
x--;
document.write("Value after decrement is : " + x + "<br>")

var remainder = x % 3 ;
document.write("The remainder is : " + remainder + "<br>")


// Question_4:
var ticket_price = 600;
var numberOfTickets = 5;
 buy_ticket = ticket_price * numberOfTickets ;
 document.write("Total cost to buy 5 tickets to a movie is: " + buy_ticket+ "PKR");

// Question_5:
var number = +prompt("Enter a number to display its multiplication table:");
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
  var result = number * i;
  document.write(number + " x " + i + " = " + result + "<br>");
}

// Question_06:
var Celcius_Temp = 40;
var Fahrenheit_Temp = (Celcius_Temp * 9 / 5) + 32;
document.write(Celcius_Temp + "°C is " + Fahrenheit_Temp + "°F <br>");


var Fahrenheit_Temp = 14;
var Celcius_Temp = (Fahrenheit_Temp - 32) * 5 / 9;
document.write(Fahrenheit_Temp + "°F is " + Celcius_Temp + "°C");

// Question_07:

var priceOfItem1 = 500;
var priceOfItem2 = 700;
var orderedQuantityOfItem1 = 2;
var orderedQuantityOfItem2 = 3;
var shippingCharges = 100;
var totalCost = (priceOfItem1 * orderedQuantityOfItem1) + (priceOfItem2 * orderedQuantityOfItem2) + shippingCharges;
document.write("<h2>SHOPPING CART:</h2>");
document.write("Price of Item 1 is: " + priceOfItem1 + " PKR<br>");
document.write("Ordered Quantity of Item 1 is: " + orderedQuantityOfItem1 + "<br>");
document.write("Price of Item 2 is: " + priceOfItem2 + " PKR<br>");
document.write("Ordered Quantity of Item 2 is: " + orderedQuantityOfItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + " PKR<br>");
document.write("Total Cost of your order: " + totalCost + " PKR");

// Question_08:
var TotalMarks = 980;
var MarksObtained = 804;
var percentage = (MarksObtained / TotalMarks ) * 100;
document.write("Percentage is: " + percentage);

// Question_09:
var us_dollars = 10;
var saudi_riyals = 25;
var exchange_rate_usd_to_pkr = 104.80;
var exchange_rate_sar_to_pkr = 28;

total_pkr = (us_dollars * exchange_rate_usd_to_pkr) + (saudi_riyals * exchange_rate_sar_to_pkr)

document.write("Total Currency in Pakistani Rupees :", total_pkr);


// Question_10;
var number = 8;
var result = (((number + 5) * 10) / 2);
document.write("Final result : ", result);

// Question_11;
var currentYear = 2023;
var birthYear = 2002; // Replace with the actual birth year
var age = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>" + "Birth Year: " + birthYear + "<br>" + "Your Age is : " + age );

// Question_12;
var radius = 20; // Replace with the actual radius value

var circumference = 2 * Math.PI * radius;
var AreaOfCircle = Math.PI * radius * radius;

document.write("The radius of a circle is: " + radius + "<br>" + "The circumference is " + circumference + "<br>" + "The Area of circle is " + AreaOfCircle);


// Question_13:
var favoriteSnack = "chocolate"; 
var currentAge = 20; 
var maximumAge = 60; 
var amountPerDay = 1; 

var remainingYears = maximumAge - currentAge;
var totalAmount = remainingYears * 365 * amountPerDay;

document.write("Favourite Snack: " + favoriteSnack + "<br>" + "Current Age: " + currentAge + "<br>" + "Estimated Maximum Age: " + maximumAge + "<br>" + "Amount of snack per day: "+ amountPerDay + "<br>");
document.write("You will need " + totalAmount + " " + favoriteSnack + "s to last you until the ripe old age of 60");


