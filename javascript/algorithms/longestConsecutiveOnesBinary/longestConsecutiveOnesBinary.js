const assert = require("assert");

import { decimalToBinary } from "./decimalBinaryConversion";

function countConsecutiveOnes(num) {
  const binary = decimalToBinary(num); // convert to binary
  const binaryArray = binary.split("");
  let largest = 0;
  let count = 0;

  for (let i = 0; i < binaryArray.length; i++) {
    if (binaryArray[i] === "1") {
      count++;
      if (count > largest) {
        // find the largest amount of 1's
        largest = count;
      }
    } else {
      // reset counter to 0 if not 1 since problem requires consecutive 1's
      count = 0;
    }
  }
  return largest;
}

assert.equal(countConsecutiveOnes(156), 3);
assert.equal(countConsecutiveOnes(0), 0);
