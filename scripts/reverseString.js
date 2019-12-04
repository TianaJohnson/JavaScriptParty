const reverseString = str =>
str
    .toLowerCase() // if uppercase is present, turns all into lower case, removes case sensitivity
    .split('')
    .reverse()
    .join('');

module.exports = reverseString;