const reverseString = require('./reverseString');

//is this function defined, does it exist
test('reverseString function exixts', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});