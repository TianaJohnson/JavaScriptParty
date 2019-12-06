const practice = require('./practice');

//to run something(function) before/after a test has been run
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// to run something before all tests
// then run something after all test have be completed
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database Initialized...');
// const closeDatabase = () => console.log('Database Closed...');
const nameCheck = () => console.log('Checking Name....');

// checks only tess run inside of decribe ...
describe('checking Names', () => {
     beforeEach(() => nameCheck());

     test('User is Jeff', () => {
         const user = 'Jeff';
         expect(user).toBe('Jeff');
     });

     test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    });
});

// toBe add 
test('Adds 2 + 2 to equal 4', () => {
    expect(practice.add(2, 2)).toBe(4);
});

//not.toBe add
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(practice.add(2, 2)).not.toBe(5);
});

// isNull toBeNull
test('Should be null', () => {
    expect(practice.isNull()).toBeNull();
});

//can work with null and undifined toBeFalsy
test('Should be falsy', () => {
    expect(practice.checkValue(null)).toBeFalsy();
});

//toEqual for object or array
test('User should be Tiana JOhnson object', () => {
    expect(practice.createUser()).toEqual({
        firstName: 'Tiana',
        lastName: 'Johnson'
    });
});

//less than / greater than
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

//regular expretions 
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

// arrays  toConatain
test('Sam should be in usernames', ()=> {
    usernames = [ 'Paul', 'Tom', 'Jen', 'Kelly', 'Sam'];
    expect(usernames).toContain('Sam');
});


  //promise
// test('User fetched name should be Leanne Graham', ()=> {
//     expect.assertions(1);
//     return practice.fetchUser().then(data => {
//           expect(data.name).toEqual('Leanne Graham')
//         });
// });


//async await
test('User fetched name should be Leanne Graham', async ()=> {
    expect.assertions(1);
    const data = await practice.fetchUser();     
    expect(data.name).toEqual('Leanne Graham')
});


// RULES
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement trats as false 



// test('If the number is divisible by 3, return "Fizz"',() => {
//     expect(divide(3)).toBe('Fizz');
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


