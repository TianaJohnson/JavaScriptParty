const practice = require ('./practice');

test ('add 2 + 2 to equal 4',() =>{
    expect(2+2).toBe(4);
});

//didnt work
// test('Adds 2 + 2 to equal 4', () => {
//     expect(practice.add( 2, 2 )).toBe( 4 );
// });

// const divide = require('./practice');

// test('If the number is divisible by 3, return "Boop"',() => {
//     expect(divide(3)).toBe('Boop');
//     });

// test('If the number is divisible by 5, return "Buzz"',() => {
//     expect(divide(5)).toBe('Buzz');
// });
        
// test('If the number is divisible by both 3 and 5, return "FizzBuzz"',() => {
//     expect(divide(15)).toBe('Fizzbuzz');
// })

// test('If the number is not divisable by 3 or 5 than return num', () => {
//     expect(divide(1)).toBe(1);
// })