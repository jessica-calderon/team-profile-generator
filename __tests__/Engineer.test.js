const Engineer = require('../lib/Engineer');
const engineer = new Engineer('jessica', '2345678', 'test2@mock.com', 'jessica-calderon');

test('test to check if we have necessary values for engineer', () => {
    expect(engineer.getName()).toBe('jessica');
    expect(engineer.id).toBe('2345678');
    expect(engineer.email).toBe('test2@mock.com');
    expect(engineer.github).toBe('jessica-calderon');
});
test('test to check if getName returns the name value', () => {
    expect(engineer.getName()).toBe('jessica');
});
test('test to check if getId returns the id value', () => {
    expect(engineer.getId()).toBe('2345678');
});
test('test to check if getEmail returns the email value', () => {
    expect(engineer.getEmail()).toBe('test2@mock.com');
});
test('test to check if getGithub returns the github username value', () => {
    expect(engineer.getGithub()).toBe('jessica-calderon');
});
test('test to check if getRole returns the engineer role value', () => {
    expect(engineer.getRole()).toBe('Engineer');
});