const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toBe('Dave');
    expect(employee.name.length).toBeGreaterThan(0);
    // expect(employee.value).toEqual(expect.any(String));
})