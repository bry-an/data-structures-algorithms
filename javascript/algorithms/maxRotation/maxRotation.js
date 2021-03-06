// Take a number: 56789. Rotate left, you get 67895.
// Keep the first digit in place and rotate left the other digits: 68957.
// Keep the first two digits in place and rotate the other ones: 68579.
// Keep the first three digits and rotate left the rest: 68597. Now it is over since keeping the first four it remains only one digit which rotated is itself.
// You have the following sequence of numbers:
// 56789 -> 67895 -> 68957 -> 68579 -> 68597
// and you must return the greatest: 68957.

const assert = require("assert");

const rotateLeft = array => {
  const element = array.shift();
  array.push(element);
  return array;
};

let outsideArray = [];

let counter = 0;

function maxRot(n) {
  outsideArray.push(parseInt(n));
  let array = ("" + n).split("");

  while (counter < array.length - 1) {
    let toRotate = array.splice(counter);
    let toStaySame = array.splice(0, counter);
    let rotatedArr = rotateLeft(toRotate);
    let addBackFrozen = toStaySame.concat(rotatedArr);
    let joinedArr = addBackFrozen.join("");
    counter++;
    return maxRot(joinedArr);
  }
  const max = Math.max(...outsideArray);

  counter = 0;
  outsideArray = [];
  return max;
}

assert.equal(maxRot(56789), 68957);
