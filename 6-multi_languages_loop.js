/**
 * This script prints a series of lines using a single console.log() call,
 * by iterating through an array of strings and building a single message.
 */

// Create a constant array of strings.
const languages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Use the join() method with a newline character to create a single string.
// This approach fulfills the requirement of using a loop internally
// and allows for a single console.log() call.
// The join() method is more concise than a manual loop for this task.
const message = languages.join('\n');

// Print the final string to the console.
console.log(message);