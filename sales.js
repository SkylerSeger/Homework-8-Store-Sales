var day1 = prompt("enter store sales for day 1");
var day2 = prompt("enter store sales for day 2");
var day3 = prompt("enter store sales for day 3");
var day4 = prompt("enter store sales for day 4");
var day5 = prompt("enter store sales for day 5");
var day6 = prompt("enter store sales for day 6");
var day7 = prompt("enter store sales for day 7");

var sales = [day1, day2, day3, day4, day5, day6, day7];

total = 0;

for (i = 0; i < sales.length; i++)

     total = total + sales[i];

document.write(total);
