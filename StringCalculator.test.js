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

