const assert = require('assert');

const embolden = (str, list) => {
    const strArr = str.split('');
    const emboldenArr = new Array(str.length).fill(null);
    list.forEach(substring => {
        const [start, end] = findSubstring(str, substring);
        emboldenArr[start] = 1;
        emboldenArr[end] = 0;
    });
    let boldFlag = false;
    let indexOfLastUnbold = 0;
    emboldenArr.forEach((item, i) => {
        if (item === 1) {
            if (!boldFlag) {
                boldFlag = true;
            } else {
                emboldenArr[i] = null;
            }
        } else if (item === 0) {
            if (boldFlag) {
                boldFlag = false;
                indexOfLastUnbold = i;
            } else {
                emboldenArr[indexOfLastUnbold] = null;
            }
        }
    }); 
    const returnArr = [];
    emboldenArr.forEach((item, i) => {
        if (item === 1) {
            returnArr.push('<b>');
        } else if (item === 0) {
            returnArr.push('</b>');
        }
        returnArr.push(strArr[i]);
    });
    return returnArr.join('');
    
};

const findSubstring = (string, substring) => {

    const recurse = (string, substring, startInd = 0, endInd = 0) => {
        if (!substring) {
            return [startInd, endInd];
        }
        if (!string) {
            return -1;
        }
        if (string[0] === substring[0]) {
            return recurse(string.slice(1), substring.slice(1), startInd, ++endInd);
        }
        return recurse(string.slice(1), substring, ++startInd, ++endInd);
    };
    return recurse(string, substring);
};


assert.deepEqual(embolden('abcdefg', ['bc', 'ef']), 'a<b>bc</b>d<b>ef</b>g');
assert.deepEqual(embolden('abcdefg', ['bcd', 'def']), 'a<b>bcdef</b>g');

console.log('All tests passed!');