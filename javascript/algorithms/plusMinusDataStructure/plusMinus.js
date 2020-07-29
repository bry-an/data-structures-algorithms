const assert = require('assert');

class PlusMinus {
    constructor() {
        this.max = [0, ''];
        this.min = [Infinity, ''];
        this.items = {};
    }

    plus(item) {
        if(this.items[item]) {
            this.items[item]++;
        } else {
            this.items[item] = 1;
        }
        if (this.items[item] > this.max[0]) {
            this.max[0] = this.items[item];
            this.max[1] = item;
        }
        if (this.items[item] < this.min[0]) {
            this.min[0] = this.items[item];
            this.min[1] = item;
        }
    }
    minus(item) {
        if (this.items[item] && this.items[item] === 1) {
            delete this.items[item];
        } else {
            this.items[item]--;
        }
    }
    getMax() {
        return this.max[1];
    }
    getMin() {
        return this.min[1];
    }
}

const plusMinusStruct = new PlusMinus();
plusMinusStruct.plus('test1');
assert.deepStrictEqual(plusMinusStruct.getMax(), 'test1');
assert.deepStrictEqual(plusMinusStruct.getMin(), 'test1');
plusMinusStruct.plus('test2');
plusMinusStruct.plus('test2');
assert.deepStrictEqual(plusMinusStruct.getMax(), 'test2');
assert.deepStrictEqual(plusMinusStruct.getMin(), 'test1');
plusMinusStruct.minus('test2');
plusMinusStruct.minus('test1');
assert.ok(!('test1' in plusMinusStruct.items));
assert.deepStrictEqual(plusMinusStruct.items.test2, 1);

console.log('All tests passed');