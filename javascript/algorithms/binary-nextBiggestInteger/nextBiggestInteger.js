const decimalToBinary = decimal => {
    // while decimal > 0, make remainder of division by two and add to an array, then reverse that array
    const binaryArr = [];
    let quotient = decimal;

    while (quotient > 0) {
        const remainder = quotient % 2;
        binaryArr.push(remainder);
        quotient = Math.floor(quotient / 2);
    }
    return binaryArr.reverse().join('');
};


const nextBiggestInt = int => {
    const binary = decimalToBinary(int);
    const binaryOnesCount = countNumberOfOnes(binary);

    let keepGoing = true;
    let answer = int;
    
    while (keepGoing) {
        let newBinary = decimalToBinary(++int);
        let newInt = parseInt(newBinary, 2);
        if (countNumberOfOnes(decimalToBinary(newInt).toString()) === binaryOnesCount) {
            answer = newInt;
            keepGoing = false;
        }
    }
    return answer;
};

const countNumberOfOnes = numString => {
    let count = 0;
    numString.split('').forEach(digit => {
        if (digit === '1') count++;
    });
    return count;
};

console.log(nextBiggestInt(6));