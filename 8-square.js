/**
 * This script prints a square of a given size using the 'X' character.
 * The size of the square is determined by the first command-line argument.
 */

// Get the first command-line argument and convert it to an integer.
const arg = process.argv[2];
const size = parseInt(arg, 10);

// Check if the argument is a valid number.
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Use a nested loop to build and print the square.
  for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
      row += 'X';
    }
    console.log(row);
  }
}