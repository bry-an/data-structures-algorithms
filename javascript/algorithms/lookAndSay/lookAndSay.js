const assert = require('assert');

const lookAndSay = (count, num = 1) => {
    if (count === 1) {
        return num;
    }
    count--;
    const stringNum = num.toString().split('');

    let currentChar = '';
    let currentCount = 0;
    let returnString = '';

    stringNum.forEach((char) => {
        if (currentChar === char) {
            currentCount++;
        } else {
            if (currentCount > 0) {
                returnString = returnString.concat(currentCount).concat(currentChar);
                currentCount = 1;
            } else {
                currentCount = 1;
            }
        }
        currentChar = char;
    });
    returnString = returnString.concat(currentCount).concat(currentChar);
    return lookAndSay(count, parseInt(returnString));
};

assert.deepEqual(lookAndSay(1), 1);
assert.deepEqual(lookAndSay(2), 11);
assert.deepEqual(lookAndSay(3), 21);
assert.deepEqual(lookAndSay(4), 1211);
assert.deepEqual(lookAndSay(5), 111221);

console.log('All tests passed!');

