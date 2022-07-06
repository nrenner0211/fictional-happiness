const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('');
    expect(typeof(employee)).toBe('object');
})