// Let's define a "sevenish" number to be one which is either a power of `7`, or the sum of unique powers of `7`. 
// The first few sevenish numbers are `1`, `7`, `8`, `49`, and so on. Create an algorithm to find the `nth` sevenish number.

const nthSevenishNumber = (n) => {
    const sevenishNumbers = [];
    const powersOfSeven = [];
    let count = 0;
    let sum = 0;

    while (sevenishNumbers.length <= n) {
        powersOfSeven.push(Math.pow(7, count));
        const powersSum = powersOfSeven.reduce((a, b) => a + b);
    }
};
