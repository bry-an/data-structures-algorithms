const assert = require('assert');

function zero(operation) {
    if (!operation) {
        return 0;
    }
    return artithmetize(0, operation[0], operation[1]);
}
function one(operation) {
    if (!operation) {
        return 1;
    }
    return artithmetize(1, operation[0], operation[1]);
}
function two(operation) {
    if (!operation) {
        return 2;
    }
    return artithmetize(2, operation[0], operation[1]);
}
function three(operation) {
    if (!operation) {
        return 3;
    }
    return artithmetize(3, operation[0], operation[1]);
}
function four(operation) {
    if (!operation) {
        return 4;
    }
    return artithmetize(4, operation[0], operation[1]);
}
function five(operation) {
    if (!operation) {
        return 5;
    }
    return artithmetize(5, operation[0], operation[1]);
}
function six(operation) {
    if (!operation) {
        return 6;
    }
    return artithmetize(6, operation[0], operation[1]);
}
function seven(operation) {
    if (!operation) {
        return 7;
    }
    return artithmetize(7, operation[0], operation[1]);
}
function eight(operation) {
    if (!operation) {
        return 8;
    }
    return artithmetize(8, operation[0], operation[1]);
}
function nine(operation) {
    if (!operation) {
        return 9;
    }
    return artithmetize(9, operation[0], operation[1]);
}

function plus(num) {
    return ['+', num];
}
function minus(num) {
    return ['-', num];
}
function times(num) {
    return ['*', num];
}
function dividedBy(num) {
    return ['/', num];
}

function artithmetize(num1, operand, num2) {
    switch(operand) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
        return num1 * num2;
    case '/':
        return parseInt(num1 / num2);
    default:
        return null;
    }
}

assert.equal(seven(times(five())), 35);
assert.equal(four(plus(nine())), 13);
assert.equal(eight(minus(three())), 5);
assert.equal(six(dividedBy(two())), 3);