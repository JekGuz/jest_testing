let { sum, isPalindrome, isStrongPassword, isWeakPassword, countWords, lengthOfLastWord, longestCommonPrefix, climbStairs, fromArray, toArray, deleteDuplicates, treeFromArray, isSymmetric } = require("../src/functions");
// При этом в function мы сделали module.exports ListNode - а тут он серенький значит не используется


describe("sum f´unction", () => {
    test("sum two numbers", () => {
        expect(sum(2, 2)).toBe(4);
    });

    test("work with null", () => {
        expect(sum(0, 0)).toBe(0);
    });
});

describe("Check if a string is palindrome", () => {
    let strArray = ["Anna", "Mom", "Civic", "Kayak", "Level", "Madam", "Radar"];
    strArray.forEach(elem => {
        test("${elem} is a palindrome", () => {
            expect(isPalindrome(elem)).toBe(true)
        });
    });
});

describe("is strong password", () => {
    let passArray = [
        "StrongddcvfFFF!012!",
        "AutherStrongPass$001",
        "YetanotherStrongPass@227"
    ];

    passArray.forEach(elem => {
        test("${elem} is a strong password", () => {
            expect(isStrongPassword(elem)).toBe(true);
        });
    });
});

describe("is weak password", () => {
    let passArray = [
        "054400",
        "Auther",
        "Y@@@"
    ];

    passArray.forEach(elem => {
        test("${elem} is a strong password", () => {
            expect(isWeakPassword(elem)).toBe(true);
        });
    });
});


// Без фукции
//describe("Weak password", () => {
//    let { isStrongPassword } = require('../src/functions');
//    let passArray = ["weak1", "pass2", "word3", "short4"];
//    passArray.forEach(elem => {
//        test(Is ${ elem } a weak password ?, () => {
//            expect(isStrongPassword(elem)).toBe(false);
//        });
//    });
//});

describe("word count", () => {
    let strArray = [
        ["Hello World this is a test string", 7],
        ["fly me to the moon", 5],
        ["luffy is still joyboy", 4]
    ];
    strArray.forEach((elem) => {
        test('"${elem[0]}" has ${elem[1]} word', () => {
            expect(countWords(elem[0])).toBe(elem[1]);
        });
    });
});

describe(" Length of last word", () => {
    let LastWordArray = [
        ["Hello World this is a test string", 6],
        ["fly me to the moon", 4],
        ["luffy is still joyboy", 6]
    ];
    LastWordArray.forEach(([elem, expected]) => {
        test(`"${elem}" has ${expected} letters in the last word`, () => {
            expect(lengthOfLastWord(elem)).toBe(expected);
        });
    });
});

describe("longestCommonPrefix", () => {
    const cases = [
        [["flower", "flow", "flight"], "fl"],
        [["dog", "racecar", "car"], ""],
    ];

    cases.forEach(([arr, expected]) => {
        test(`Common prefix of [${arr.join(', ')}] is "${expected}"`, () => {
            expect(longestCommonPrefix(arr)).toBe(expected);
        });
    });
});

describe("climbStairs", () => {
    // варианты: (1+1+1+1), (1+1+2), (1+2+1), (2+1+1), (2+2)
    climbArray = [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 5],
        [5, 8],
        [10, 89]
    ];

    climbArray.forEach(([n, expected]) => {
        test(`Number of ways to climb ${n} steps is ${expected}`, () => {
            expect(climbStairs(n)).toBe(expected);
        });
    });
});

describe('deleteDuplicates (sorted linked list)', () => {
    duplicatesArray = [
        [[1, 1, 2], [1, 2]],
        [[1, 1, 2, 3, 3], [1, 2, 3]],
        [[1], [1]],                  // один элемент
        [[1, 1, 1, 1], [1]],         // все одинаковые
    ];

    duplicatesArray.forEach(([input, expected]) => {
        test(`from ${JSON.stringify(input)} -> ${JSON.stringify(expected)}`, () => {
            const head = fromArray(input);
            const cleaned = deleteDuplicates(head);
            expect(toArray(cleaned)).toEqual(expected);
        });
    });
});


describe('isSymmetric (binary tree)', () => {
    symmetricArray = [
        [[1, 2, 2, 3, 4, 4, 3], true],             // пример 1
        [[1, 2, 2, null, 3, null, 3], false],      // пример 2
        [[1], true],                         // один узел — симметрично
        [[1, 2, 2, null, 3, 3, null], true],       // зеркальные null и числа
        [[1, 2, 2, 3, null, null, 3, 4], false],    // асимметрия глубже
    ];

    symmetricArray.forEach(([arr, expected]) => {
        test(`Tree ${JSON.stringify(arr)} -> ${expected}`, () => {
            const root = treeFromArray(arr);
            expect(isSymmetric(root)).toBe(expected);
        });
    });
});

//toBeGreaterThan
//toBeLessThan
//toBeLessThanEqual
