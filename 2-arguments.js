/**
 * This script checks the number of command-line arguments passed to it
 * and prints a specific message based on the count.
 * It uses the 'process.argv' array to access the arguments.
 */

// process.argv is an array that contains the command-line arguments.
// The first two elements are always 'node' and the script path.
// The actual arguments start from the third element (index 2).
const numArgs = process.argv.length - 2;

// Check the number of arguments using an if-else if-else statement.
if (numArgs === 0) {
  console.log("No argument");
} else if (numArgs === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}