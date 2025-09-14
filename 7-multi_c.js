/**
 * This script prints "C is fun" a number of times specified by the first
 * command-line argument. It checks if the argument is a valid number
 * before proceeding.
 */

// Get the first command-line argument and convert it to an integer.
const arg = process.argv[2];
const numOccurrences = parseInt(arg, 10);

// Check if the argument is a valid number.
if (isNaN(numOccurrences)) {
  console.log("Missing number of occurrences");
} else {
  // Use a for loop to build the final string.
  let output = "";
  for (let i = 0; i < numOccurrences; i++) {
    output += "C is fun";
    // Add a newline character for all but the last iteration.
    if (i < numOccurrences - 1) {
      output += "\n";
    }
  }
  // Print the complete string with a single console.log call.
  console.log(output);
}