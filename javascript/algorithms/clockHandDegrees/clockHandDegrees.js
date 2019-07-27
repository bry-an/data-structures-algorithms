const assert = require("assert");

const minuteHandDegrees = minutes => {
  return minutes * 6;
};

const hourHandDegrees = (hours, minutes) => {
  if (hours === 12) {
    hours = 0;
  }
  const base = hours * 30;
  return base + minutes * 0.5;
};

const clockHandDegrees = time => {
  const timeArr = time.split(":");
  const hours = parseInt(timeArr[0]);
  const minutes = parseInt(timeArr[1]);

  const minuteDegrees = minuteHandDegrees(minutes);
  const hourDegrees = hourHandDegrees(hours, minutes);

  return Math.round(hourDegrees - minuteDegrees);
};

//bonus: returning answer to floor of nearest minute
const checkWhenAngleZero = () => {
  let answer = [];
  let flag = true;

  for (let i = 0; i < 12; i++) {
    for (j = 0; j < 60; j++) {
      const hourDegrees = hourHandDegrees(i, j);
      const minuteDegrees = minuteHandDegrees(j);
      if (minuteDegrees === 0) {
        flag = true;
      }
      let difference = hourDegrees - minuteDegrees;

      if (difference < 0 && flag) {
        answer.push(`${i === 0 ? "12" : i}:${j > 10 ? j - 1 : "0" + (j - 1)}`);
        flag = false;
      }
    }
  }
  return answer;
};

assert.equal(clockHandDegrees("6:00"), 180);
assert.equal(clockHandDegrees("3:15"), 8);

const anglesZero = checkWhenAngleZero();
assert.equal(anglesZero.includes("12:00"), true);
