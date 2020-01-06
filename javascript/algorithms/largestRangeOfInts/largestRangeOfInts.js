// have largest consecutive count; range start variable
// sort array
// if arr[i] === arr[i+1] - 1

const largestRange = arr => {
    let largestRange = 0;
    let largestRangeStart = 0;
    let currentLargestRange = 0;
    let currentLargestRangeStart = 0;

    for (let i = 0; i < arr.length; i++) {
        if ((arr[i + 1] - 1) === arr[i]) {
            currentLargestRange++;
            currentLargestRangeStart = i;
            if (currentLargestRange > largestRange) {
                largestRange = currentLargestRange;

            }
        } else {
            currentLargestRange = 0;
        }
    }
};