const isAnagram = require('./anagram');

// Does it exist
test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

// Does it work
test (' "cinema" is an anagram of "iceman" ', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
}); 