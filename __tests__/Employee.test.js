const Employee = require('.../lib/Employee');
const employee = new Employee('jessica', '1234567', 'mock@test.com');

test('test if we have necessary values for employee', () => {
    expect(employee.name).toBe('jessica');
    expect(employee.id).toBe('1234567');
    expect(employee.email).toBe('mock@test.com');
});
test('test to see if getName returns the name value', () => {
    expect(employee.getName()).toBe('jessica');
});
test('test to see if getId returns the id value', () => {
    expect(employee.getName()).toBe('1234567');
});
test('test to see if getEmail returns the email value', () => {
    expect(employee.getName()).toBe('mock@test.com');
});