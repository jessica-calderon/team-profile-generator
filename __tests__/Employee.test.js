const Employee = require('../lib/Employee');
const employee = new Employee('jessica', '1234567', 'test@mock.com');

test('test if we have necessary values for employee', () => {
    expect(employee.name).toBe('jessica');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('test@mock.com');
});
test('test to check if getName returns the name value', () => {
    expect(employee.getName()).toBe('jessica');
});
test('test to check if getId returns the id value', () => {
    expect(employee.getId()).toBe('1234567');
});
test('test to check if getEmail returns the email value', () => {
    expect(employee.getEmail()).toBe('test@mock.com');
});
test('test to check if getRole returns the engineer role value', () => {
    expect(employee.getRole()).toBe('Employee');
});