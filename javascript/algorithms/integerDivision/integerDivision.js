const divide = (product, divisor) => {
    if (divisor === 0) {
        return 'Division by 0 is undefined';
    }
    let i = 1;
    let keepGoing = true;
    let baseResult = 0;
    let sign = 1;
    if ((product < 0 && divisor > 0) || (divisor < 0 && product > 0)) {
        sign = -1;
    }

    while (keepGoing) {
        if (divisor * i > product) {
            keepGoing = false;
            baseResult = (i - 1) * sign;
        }
        i++;
    }
    return baseResult === 0 ? [0, 'r <= 1'] : [baseResult, product % baseResult];
};

console.log(divide(3, 10));