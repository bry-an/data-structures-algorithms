// create local copy of set
// iterate over string
// if character is in set, add to return string and remove from set
// when set length is zero, recursively call function on new string
// if end of string is reached and set length is not zero, return null
// when return string length is same as input string, return string


const shortestSubstrWithChars = (string, set) => {
    console.log('executing SSWC with ', string);
    const originalStringLength = string.length;

    let substring = '';
    let returnVal = null;

    const setCopy = new Set();
    for (const v of set) {
        setCopy.add(v);
    }

    let keepGoing = false;

    string.split('').forEach(char => {
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

console.log(shortestSubstrWithChars('figeahaeci', exampleSet));
