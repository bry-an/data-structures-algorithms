const assert = require("assert");

function fewestRescueBoats(weights, k) {
    let numOfBoats = 0;
    for (let i = 0; i < weights.length; i++) {
        if (weights[i] > k) return "Invalid weight"
        let maxWeight = 0;
        let maxIndex;
        for (let j = i + 1; j < weights.length; j++) {
            const totalWeight = weights[i] + weights[j];
            if (totalWeight <= k && totalWeight > maxWeight) {
                maxWeight = totalWeight;
                maxIndex = j;
            }
        }
        if (maxWeight > 0) {
            weights.splice(maxIndex, 1);
        }
        numOfBoats++;
    }
    return numOfBoats;
}

assert.equal(fewestRescueBoats([100, 200, 150, 80,], 200), 3) // 3
assert.equal(fewestRescueBoats([100, 200, 150, 80, 30, 30], 200), 4) // 4
assert.equal(fewestRescueBoats([250, 150, 180], 200), "Invalid weight") // Invalid Weight 
