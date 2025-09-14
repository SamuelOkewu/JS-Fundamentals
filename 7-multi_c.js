// This script prints "C is fun" a specified number of times.
// The number of occurrences is taken from the first command-line argument.

// Get the first command-line argument and convert it to an integer.
const numberOfOccurrences = parseInt(process.argv[2]);

// Check if the argument is a valid positive integer.
if (isNaN(numberOfOccurrences) || numberOfOccurrences <= 0) {
  // If the argument is invalid, print the specified message.
  console.log("Missing number of occurrences");
} else {
  // Otherwise, use a loop to build the output string.
  let output = "";
  for (let i = 0; i < numberOfOccurrences; i++) {
    output += "C is fun";
    // Add a newline character for all but the last iteration.
    if (i < numberOfOccurrences - 1) {
      output += "\n";
    }
  }
  // Use the second and final console.log to print the complete string.
  console.log(output);
}
