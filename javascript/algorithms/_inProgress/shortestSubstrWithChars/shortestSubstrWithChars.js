// "figeahaeci"` and the set of characters `{a, e, i}`, you should return `"aeci"`

const assert = require('assert');

const shortestSubstrWithChars = (string, set) => {
    const originalStringLength = string.length;

    let substring = '';
    let returnVal = null;

    const setCopy = new Set();
    for (const v of set) {
        setCopy.add(v);
    }

    let keepGoing = false;

    string.split('').forEach((char) => {
        if (keepGoing) {
            substring = substring.concat(char);
        }
        if (setCopy.has(char)) {
            if (!keepGoing) {
                keepGoing = true;
            }
            setCopy.delete(char);
            substring = substring.concat(char);
        }
        if (setCopy.size === 0) {
            if (substring.length !== originalStringLength) {
                shortestSubstrWithChars(substring, set);
            } else {
                returnVal = substring;
            }
        }
    });
    return returnVal;
};

const exampleSet = new Set();
exampleSet.add('a');
exampleSet.add('e');
exampleSet.add('i');

assert.deepStrictEqual(shortestSubstrWithChars('figeahaeci', exampleSet), 'aeci');
