/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2;
console.log("The result is: " + result);
//This already worked because of implicit type conversion, but I went ahead and converted "5" into a number.

let isValid = Boolean(false); 
if (isValid) {
    console.log("This is valid!");
}
//The original code has the value of "false", which is a string, which is truthy. Becuase it is truthy, the Boolean function interprets the value as true, causing the if statement to run the console.log function. If you simply remove the quotation marks, the value is no longer a string and is interpreted as a value of false.

let age = Number("25");
let totalAge = age + 5;
console.log("Total Age: " + totalAge);
//Currently the code concatenates age and the number 5. By converting 25 to a number with the number() function, the totalAge variable is able to add the two values as numbers.

//Part 2

let userName = null
let subscriptionLevel = "premium"
let subscriptionTime = Number("3" + 1)
console.log(userName + " has been a " + subscriptionLevel + " member for " + subscriptionTime + " months!")
//This code does not work as intended because of implicit type conversion. Even though the value for subscriptionTime is explicity converted to a number, the parameter for Number is both a string and a number joined by a +, resulting in concatenation instead of addition. This ultimately results in the code failing to increase the overall subscription time by 1 month as intended.