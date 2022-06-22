let num1 = prompt("What is your first number:  ");
let num2 = prompt("What is your second number?  ");
let operation = prompt("select an operation:+,-,/,*, %");
if (operation == "+") {
  alert("Your answer is " + num1 + num2);
} else if (operation == "*") {
  alert("Your answer is " + num1 * num2);
} else if (operation == "/") {
  alert("Your answer is " + num1 / num2);
} else if (operation == "-") {
  alert("Your answer is " + num1 - num2);
} else if (operation == "%") {
  alert("Your answer is " + (num1 % num2));
}
