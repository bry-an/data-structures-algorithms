// Given a string, find the length of the smallest window that contains every distinct character. Characters may appear more than once in the window.

// For example, given "jiujitsu", you should return 5, corresponding to the final five letters.


const assert = require('assert');

const smallestWindow = str => {
    const uniqueChars = [...new Set(str.split(''))].join('');

    let i = 0;
    let j = str.length - 1;
    let keepGoing = true;
    let windowMaxWidth = 0;
    while (keepGoing) {
        if (j - i < str.length) keepGoing = false; 
        if (keepGoing) {
            const window = str.split('').slice(i, j);
            window.forEach(character => {
                if (!uniqueChars.includes(character)) {
                    keepGoing = false;
                }
            });
            if (window.length > windowMaxWidth && keepGoing) {
                windowMaxWidth = window.length;
            }
            if (!keepGoing) {
                i--;
            } else {
                i++;
            }
        }
    }
    return windowMaxWidth;
};

assert.deepStrictEqual(smallestWindow('jiujitsu'), 5);