const probFunction = (nums, probabilities) => {
    let result = 0;
    const rando = Math.random();

    probabilities.reduce((accum, currVal, i) => {
        const lowerThreshhold = accum;
        const upperThreshhold = lowerThreshhold + currVal;

        if (rando >= lowerThreshhold && rando < upperThreshhold) {
            if (!result) {
                result = nums[i];
            }
        }
        return accum + currVal;
    }, 0);
    return result;
};


const stats = (nums, probabilities) => {
    // Returns the frequency in 1000 executions of probFunction
    // that each num is produced, assuming input nums array of 1, 2, 3, 4.
    // Frequency should be roughly equivalent with probabilities inputted.

    const results = [];
    for (let i = 0; i < 1000; i++) {
        results.push(probFunction(nums, probabilities));
    }
    
    const one = results.reduce((accum, currVal) => {
        if (currVal === 1) {
            accum++;
        }
        return accum;
    }, 0);

    const two = results.reduce((accum, currVal) => {
        if (currVal === 2) {
            accum++;
        }
        return accum;
    }, 0);

    const three = results.reduce((accum, currVal) => {
        if (currVal === 3) {
            accum++;
        }
        return accum;
    }, 0);

    const four = results.reduce((accum, currVal) => {
        if (currVal === 4) {
            accum++;
        }
        return accum;
    }, 0);

    return [one/1000, two/1000, three/1000, four/1000];
};

console.log(stats([1, 2, 3, 4], [0.1, 0.5, 0.2, 0.2]));
