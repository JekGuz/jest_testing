async function hello(name) {
    return `Hello, ${name}`;
};

async function doublen(n) {
    return n * 2;
};

async function average(nums) {
    if (!Array.isArray(nums) || nums.length === 0) {
        return 0; // защита от пустого массива или неправильного аргумента
    }
    const sum = nums.reduce((a, b) => a + b, 0);
    return sum / nums.length;
};

async function joinWords(words) {
    if (!Array.isArray(words)) {
        return "";
    }
    return words.join(" ");
};

async function repeatWord(word, times) {
    if (typeof word !== "string" || typeof times !== "number" || times < 1) {
        return "";
    }
    return word.repeat(times)
};


module.exports = { hello, doublen, average, joinWords, repeatWord };