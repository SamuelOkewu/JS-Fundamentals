/**
 * This script checks for the first command-line argument.
 * If an argument is provided, it prints the argument's value.
 * If no argument is provided, it prints a message stating "No argument".
 */

// Access the first command-line argument directly from the process.argv array.
// The first two elements (index 0 and 1) are always the Node.js path and the script path.
// The first actual argument is at index 2.
const firstArgument = process.argv[2];

// Use an if-else statement to check if the argument exists.
// If it is undefined, it means no argument was passed.
if (firstArgument === undefined) {
  console.log("No argument");
} else {
  // Otherwise, a first argument was found, so we print its value.
  console.log(firstArgument);
}