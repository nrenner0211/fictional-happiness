const Intern = require('../lib/Intern');

test("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});