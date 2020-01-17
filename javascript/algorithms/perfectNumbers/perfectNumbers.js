const nthPerfectNumber = (count, num = 1) => {
    if (count === 0) {
        return --num;
    }
    const numSum = (num + '').split('').reduce((accum, curr) => parseInt(accum) + parseInt(curr));
    if (numSum === 10) {
        return nthPerfectNumber(--count, ++num);
    }
    return nthPerfectNumber(count, ++num);
};

console.log(nthPerfectNumber(4));