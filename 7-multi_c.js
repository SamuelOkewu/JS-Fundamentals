// This script prints "C is fun" a specified number of times.
// The number of occurrences is taken from the first command-line argument.

// Get the first command-line argument and convert it to an integer.
const numberOfOccurrences = parseInt(process.argv[2]);

// Check if the argument is a valid positive integer.
if (isNaN(numberOfOccurrences) || numberOfOccurrences <= 0) {

} else {
  // Otherwise, use a loop to print the message the required number of times.
  for (let i = 0; i < numberOfOccurrences; i++) {
    console.log("C is fun");
  }
}