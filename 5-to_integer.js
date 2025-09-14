/**
 * This script checks if the first command-line argument can be converted to an integer.
 * It prints the number if it is valid, otherwise it prints "Not a number".
 */

// Get the first command-line argument.
const arg = process.argv[2];

// Use parseInt() to attempt to convert the argument to an integer.
// The second argument, 10, specifies a base of 10 for the conversion.
const number = parseInt(arg, 10);

// Check if the converted number is a valid integer.
// isNaN() returns true if the value is NaN (Not a Number).
if (!isNaN(number)) {
  console.log(`My number: ${number}`);
} else {
  console.log("Not a number");
}