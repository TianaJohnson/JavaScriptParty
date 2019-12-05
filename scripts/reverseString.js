const reverseString = str =>
str
    .toLowerCase() // if uppercase is present, turns all into lower case, removes case sensitivity
    .split('')  //method is used to split a string into an array of substrings, and returns the new array
    .reverse()  //method reverses the order of the elements in an array.
    .join('');  //method returns the array as a string.

module.exports = reverseString;