function countStepsBruteForce(steps) {
    if (steps < 0) {
        return 0
    } else if (steps === 0) {
        return 1
    } else {
        return countStepsBruteForce(steps - 1) + countStepsBruteForce(steps - 2) + countStepsBruteForce(steps - 3)
    }
}
// brute force solution is O(3^n) because each call makes three separate calls!

function countStepsMemoize(steps) {
    let memo = []
    return countStepsRecurse(steps, memo)
}

function countStepsRecurse(steps, memo) {
    if (steps < 0) {
        return 0
    } else if (steps === 0) {
        return 1
    } else if (memo[steps]) {
        return memo[steps]
    } else { // notice we're simply assigning memo[n] to the brute force result of of the function. 
        // we save time by first checking if this value has been cached. If not, we brute force it then save it, 
        // thus not having to compute that particular value again 
        memo[steps] = countStepsRecurse(steps - 1, memo) + countStepsRecurse(steps - 2, memo) + countStepsRecurse(steps - 3, memo)
        return memo[steps]
    }
}
console.log(countStepsBruteForce(12))