const divide = require('../modules/divide');

test('If the number is divisible by 3, return "Fizz"',() => {
    expect(divide(3)).toBe('Fizz');
    });

test('If the number is divisible by 5, return "Buzz"',() => {
    expect(divide(5)).toBe('Buzz');
});
        
test('If the number is divisible by both 3 and 5, return "FizzBuzz"',() => {
    expect(divide(15)).toBe('Fizzbuzz');
})

test('If the number is not divisable by 3 or 5 than return num', () => {
    expect(divide(1)).toBe(1);
})