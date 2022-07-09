const Intern = require('../lib/Intern');
const intern = new Intern('jessica', '3456789', 'test3@mock.com', 'UTSA');

test('test to check if we have necessary values for intern', () => {
    expect(intern.getName()).toBe('jessica');
    expect(intern.id).toBe('3456789');
    expect(intern.email).toBe('test3@mock.com');
    expect(intern.school).toBe('UTSA');
});
test('test to check if getName returns the name value', () => {
    expect(intern.getName()).toBe('jessica');
});
test('test to check if getId returns the id value', () => {
    expect(intern.getId()).toBe('3456789');
});
test('test to check if getEmail returns the email value', () => {
    expect(intern.getEmail()).toBe('test3@mock.com');
});
test('test to check if getGithub returns the github username value', () => {
    expect(intern.getSchool()).toBe('UTSA');
});
test('test to check if getRole returns the intern role value', () => {
    expect(intern.getRole()).toBe('Intern');
});