const isAnagram = require('./anagram');

// Does it exist
test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

// Does it work
test (' "cinema" is an anagram of "iceman" ', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
}); 

// Does it work
test (' "Dormirory" is an anagram of "dirty room###" ', () => {
    expect(isAnagram('Dormitory', 'dirty room###')).toBeTruthy();
}); 

// Does it work
test (' "Hello" is NOT an anagram of "Aloha" ', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
}); 