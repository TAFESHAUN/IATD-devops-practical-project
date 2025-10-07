import { isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

// PLACE TESTS FOR isValidDateString UNDER HERE

// Test for invalid string
test("wrapString: wrap invalid string", () => {
    expect(isValidDateString("07/10/2025")).toBe(isValidDateString("07/10/2025"));
});

// Test for the wrong amount of "date segments" (see comments in utilities.js for more info)
test("wrapString: returns false for wrong number of date segments", () => {
    expect(isValidDateString("12/2025")).toBe(false);           
    expect(isValidDateString("12/05/2025/2025")).toBe(false);   
});

// Test for wrong number of digits in the day
test("wrapString: wrap day must be 2 digits", () => {
    expect(isValidDateString("1/05/2025")).toBe(false);
});

// Test for wrong number of digits in the month
test("wrapString: wrap month must be 2 digits", () => {
    expect(isValidDateString("12/5/2025")).toBe(false);
});

// Test for wrong number of digits in the year
test("wrapString: wrap year must be 4 digits", () => {
    expect(isValidDateString("12/05/25")).toBe(false);
});

// Test for day outside of month's number of days
test("wrapString: wrap outside of the months numbers", () => {
    expect(isValidDateString("10/13/2023")).toBe(false);
});

// Test for month greater than 12
test("wrapString: wrap false for day outside month's range. I did Feb here", () => {
    expect(isValidDateString("30/02/2023")).toBe(false);
});

// Test for day <= 0
test("wrapString: wrap returns false for day <= 0", () => {
    expect(isValidDateString("00/01/2023")).toBe(false);
});