
const findMissingNums = (arr, n) => {
    const nums = new Array(n).fill(null);
    for (let i = 0; i < arr.length; i++) {
        nums[arr[i]] = true;
    }
    const returnArr = [];
    nums.forEach((num, i) => {
        if (num === null) {
            returnArr.push(i);
        }
    });
    return returnArr;
};

console.log(findMissingNums([1, 2, 4, 5, 7, 6, 8], 10));


// time and space complexity O(n)


