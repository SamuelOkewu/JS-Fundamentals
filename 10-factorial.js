/**
 * This script computes and prints the factorial of a number.
 * The number is passed as the first command-line argument.
 */

// Define a recursive function to calculate the factorial.
function factorial (n) {
  // Base case: If n is 0 or 1, the factorial is 1.
  // This also handles the case for NaN due to the prompt's requirement,
  // since parseInt(undefined) or parseInt('string') results in NaN, and
  // the initial check below will handle printing 1.
  if (n <= 1) {
    return 1;
  }
  // Recursive step: n * factorial of (n - 1).
  return n * factorial(n - 1);
}

// Get the first command-line argument and convert it to an integer.
const arg = process.argv[2];
const num = parseInt(arg);

// Check if the number is NaN. If so, print 1 as per the requirement.
if (isNaN(num)) {
  console.log(1);
} else {
  // Calculate and print the factorial.
  console.log(factorial(num));
}
