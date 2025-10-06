const { hello, doublen, average, joinWords, repeatWord } = require('../src/simple');

describe("Hello", () => {
    test("Hello function", async () => {
        let text = await hello("Katja");
        expect(text).toBe("Hello, Katja");
    });
});

test("Hello function with different name", async () => {
    expect(hello("")).resolves.toBe("Hello, ");
});

describe("doublen", () => {
    test("doublen function", async () => {
        expect(await doublen(4)).toBe(8);
    });
});

// --- Проверка average() ---
describe("average", () => {
    test("average of numbers", async () => {
        expect(await average([2, 4, 6])).toBe(4);
    });

    test("average of empty array", async () => {
        expect(await average([])).toBe(0);
    });

    test("average with invalid input", async () => {
        expect(await average("not array")).toBe(0);
    });
});

// --- Проверка joinWords() ---
describe("joinWords", () => {
    test("joins multiple words", async () => {
        expect(await joinWords(["Hello", "world"])).toBe("Hello world");
    });

    test("returns empty string for non-array", async () => {
        expect(await joinWords("oops")).toBe("");
    });

    test("joins with one word", async () => {
        expect(await joinWords(["Solo"])).toBe("Solo");
    });
});

// --- Проверка repeatWord() ---
describe("repeatWord", () => {
    test("repeats word 3 times", async () => {
        expect(await repeatWord("Hi", 3)).toBe("HiHiHi");
    });

    test("returns empty string if count < 1", async () => {
        expect(await repeatWord("Hi", 0)).toBe("");
    });

    test("returns empty string for invalid inputs", async () => {
        expect(await repeatWord(123, 2)).toBe("");
    });
});

