const stringCal = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(stringCal("")).toBe(0);
});

test('should return the number itself when a single number is provided', () => {
    expect(stringCal("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
    expect(stringCal("1,2")).toBe(3);
});

test('should return the sum of multiple numbers', () => {
    expect(stringCal("1,2,3")).toBe(6);
});

test('should handle new lines between numbers', () => {
    expect(stringCal("1\n2,3")).toBe(6);
});

