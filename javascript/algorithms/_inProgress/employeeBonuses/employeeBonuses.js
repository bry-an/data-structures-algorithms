// iterate through array:
// check how current item compares to both neighbors
// if both neighbors more than current: returnArry[item] = 1
// if one neighbor more than current: returnArry[item] = 1 more than other neighbor (less) 
// if both neighbors less than current: returnarry[item] = one more than higher of the two

const employeeBonuses = arr => {
    const bonusesArr = [];
    arr.forEach((employee, i) => {
        const left = arr[i - 1];
        const right = arr[i + 1];
        if (!left) {
            if (employee < right) {
                bonusesArr[i] = 1;
            } else {
                bonusesArr[i] = 2;
            } 
        } else if (!right) {
            if (employee < left) {
                bonusesArr[i] = 1;
            } else {
                bonusesArr[i] = 2;
            }
        } else if ((employee < left) && (employee < right)) {
            bonusesArr[i] = 1;
        // } else if ((employee < left) && (employee > right)) {
        //     bonusesArr[i] = bonusesArr[i - 1] + 1;
        // } else if ((employee > left) && (employee < right)) {
        //     bonusesArr[i] = bonusesArr[i - 1] + 1;
        // } else if ((employee > left) && (employee > right)) {
        //     bonusesArr[i] = bonusesArr[i - 1] + 2;
        // }
        } else if (employee > left) {
            bonusesArr[i] = bonusesArr[i - 1] + 1;
        }
    });
    return bonusesArr;
};

console.log(employeeBonuses([10, 40, 200, 1000, 60, 30]));