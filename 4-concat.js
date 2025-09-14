/**
 * This script prints two command-line arguments in the format "first is second".
 * It accesses the arguments directly from the process.argv array.
 */

// Access the first and second command-line arguments.
// The arguments are located at index 2 and 3 of the process.argv array.
const firstArgument = process.argv[2];
const secondArgument = process.argv[3];

// Print the arguments in the format "first is second".
console.log(`${firstArgument} is ${secondArgument}`);
