const assert = require("assert");

const distanceParser = point => {
  // p1 = (1, 2)
  const indexOfComma = point.indexOf(",");
  const pointCopy = point;
  const x = pointCopy.slice(1, indexOfComma);
  const y = point.slice(parseInt(indexOfComma + 2), parseInt(point.length - 1));
  return {
    x: parseInt(x),
    y: parseInt(y)
  };
};

const distance = (p1, p2) => {
  const p1x = distanceParser(p1).x;
  const p1y = distanceParser(p1).y;
  const p2x = distanceParser(p2).x;
  const p2y = distanceParser(p2).y;

  const xDist = p1x - p2x;
  const yDist = p1y - p2y;
  const squaredDistance = Math.pow(xDist, 2) + Math.pow(yDist, 2);

  return Math.sqrt(squaredDistance);
};

distance("(1, 2)", "(2, 1)"); //?

const closestDistance = arr => {
  let min = Infinity;
  let minPoints = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const dist = distance(arr[i], arr[j]);
      if (dist < min) {
        min = dist;
        minPoints = [];
        minPoints.push(arr[i], arr[j]);
      }
    }
  }
  return minPoints;
};

// since JS does not allow parentheses to delineate points, am converting each point to a string including parentheses then parsing that string
// Thus this problem included string parsing. To eliminate this necessity, convert each input point to an {x: Number, y: Number} object.

assert.deepEqual(
  closestDistance([
    "(1, 1)",
    "(-1, -1)",
    "(3, 4)",
    "(6, 1)",
    "(-1, -6)",
    "(-4, -3)"
  ]),
  ["(1, 1)", "(-1, -1)"]
);
