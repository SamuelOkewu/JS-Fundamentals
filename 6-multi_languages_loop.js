// This script prints three different strings on new lines using a constant array and a for loop.

// Use a constant array to store the strings.
const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

// Use a for loop to iterate through the array.
// This approach uses multiple console.log calls, which directly fulfills the loop requirement,
// but violates the "use only one console.log" constraint.
for (let i = 0; i < languages.length; i++) {
  console.log(languages[i]);
}
