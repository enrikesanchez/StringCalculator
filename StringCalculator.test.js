let StringCalculator = require('./StringCalculator');

test('Given "" When sum Then 0', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "";

    // WHEN
    const actualOutput = calculator.sum(input);

    //THEN
    const expectedOutput = 0;
    expect(actualOutput).toBe(expectedOutput);
});

test('Given "1" When sum Then 1', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "1";

    // WHEN
    const actualOutput = calculator.sum(input);

    //THEN
    const expectedOutput = 1;
    expect(actualOutput).toBe(expectedOutput);
});

test('Given "1,2" When sum Then 3', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "1,2";

    // WHEN
    const actualOutput = calculator.sum(input);

    //THEN
    const expectedOutput = 3;
    expect(actualOutput).toBe(expectedOutput);
});

test('Given "1,2,3" When sum Then 6', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "1,2,3";

    // WHEN
    const actualOutput = calculator.sum(input);

    //THEN
    const expectedOutput = 6;
    expect(actualOutput).toBe(expectedOutput);
});

test('Given "1\\n2,3" When sum Then 6', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "1\n2,3";

    // WHEN
    const actualOutput = calculator.sum(input);

    //THEN
    const expectedOutput = 6;
    expect(actualOutput).toBe(expectedOutput);
});


test('Given "//;\\n1;2" When sum Then 3', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "//;\n1;2";

    // WHEN
    const actualOutput = calculator.sum(input);

    //THEN
    const expectedOutput = 3;
    expect(actualOutput).toBe(expectedOutput);
});

test('Given "-1,2" When sum Then Exception "negatives not allowed -1"', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "-11,2";

    // WHEN THEN
    const expectedMessage = "negatives not allowed -1";
    expect(() => calculator.sum(input)).toThrow(expectedMessage);
});

test('Given "-1,-2" When sum Then Exception "negatives not allowed -1,-2"', () => {
    // GIVEN
    const calculator = new StringCalculator();
    const input = "-1,-2";

    // WHEN THEN
    const expectedMessage = "negatives not allowed -1,-2";
    expect(() => calculator.sum(input)).toThrow(expectedMessage);
});

