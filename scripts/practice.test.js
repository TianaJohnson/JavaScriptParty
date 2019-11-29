const practice = require ('./practice');

test('Adds 2 + 2 to equal 4', () => {
    expect(practice.add( 2, 2 )).toBe( 4 );
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(practice.add( 2, 2 )).not.toBe( 5 );
});

test('Should be null', () => {
    expect(practice.isNull()).toBeNull();
}); 

//can work with null and undifined toBeFalsy
test('Should be falsy', () => {
    expect(practice.checkValue(null)).toBeFalsy();
}); 

//tobeTruthy
test('User should be Tiana object', () => {
    expect(practice.creatUser(null)).toBe({ firstName: 'Tiana',
    lastName: 'Johnson'
});
});




// RULES
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement trats as false 



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