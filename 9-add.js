/**
 * This script defines a function to add two numbers and prints the result.
 * The two numbers are passed as command-line arguments.
 */

// Define the function that adds two numbers.
function add (a, b) {
  return a + b;
}

// Get the two arguments from the command line and convert them to integers.
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Call the function with the two numbers and print the returned sum to the console.
console.log(add(num1, num2));
