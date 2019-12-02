const practice = require('./practice');

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
test('User should be Tiana object', () => {
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
})

//working with async data
//expect.assertions is used with async code 
test('User fetched name should be Leanne Graham', ()=> {
    expect.assertions(1);
    return practice.fetchUser()
        .then(data => {
          expect(data.name).toEqual('Leanne Graham')
        });
});



// RULES
// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement trats as false 




