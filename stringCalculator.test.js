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

test('should support different delimiters', () => {
    expect(stringCal("//;\n1;2")).toBe(3);
});

test('should throw an error for negative numbers', () => {
    expect(() => stringCal("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('should throw an error for multiple negative numbers', () => {
    expect(() => stringCal("1,-2,3,-4")).toThrow("negative numbers not allowed: -2,-4");
});

test('should ignore numbers bigger than 1000', () => {
    expect(stringCal("2,1001")).toBe(2);
});

test('should support delimiters of any length', () => {
    expect(stringCal("//[***]\n1***2***3")).toBe(6);
});