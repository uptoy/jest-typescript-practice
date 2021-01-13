const functions = require('../../crash/functions')


test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).toBe(5);
})

test('Should be null', () => {
    expect(functions.isNUll()).toBeNull();
})

test('Should be false', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

//to Equal
test('user should be brad travery object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'aaa',
        lastName: 'iii'
    });
});

//less than and greater than
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
})

//regex
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

//Arrays
test('admin should be in username', () => {
    const usernames = ['aaa', 'aaa', 'aaa'];
    expect(usernames).toContain('admin');
})

//Promise
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})

//Async Await
// eslint-disable-next-line jest/no-identical-title
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})
})