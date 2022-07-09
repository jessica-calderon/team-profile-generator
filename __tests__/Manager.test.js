const Manager = require('../lib/Manager');
const manager = new Manager('jessica', '4567890', 'test4@mock.com', '2105551234');

test('test to check if we have necessary values for manager', () => {
    expect(manager.getName()).toBe('jessica');
    expect(manager.id).toBe('4567890');
    expect(manager.email).toBe('test4@mock.com');
    expect(manager.officePhone).toBe('2105551234');
});
test('test to check if getName returns the name value', () => {
    expect(manager.getName()).toBe('jessica');
});
test('test to check if getId returns the id value', () => {
    expect(manager.getId()).toBe('4567890');
});
test('test to check if getEmail returns the email value', () => {
    expect(manager.getEmail()).toBe('test4@mock.com');
});
test('test to check if getGithub returns the github username value', () => {
    expect(manager.getPhone()).toBe('2105551234');
});
test('test to check if getRole returns the manager role value', () => {
    expect(manager.getRole()).toBe('Manager');
});
