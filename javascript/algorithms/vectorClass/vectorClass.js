var Vector = function (components) {
    this.vector = components;
    
    this.add = function (VectorClass) {
        if (this.vector.length !== VectorClass.vector.length) throw new Error('The two arrays must be of the same length');
        const result = this.vector.map((item, i) => item + VectorClass.vector[i]);
        return new Vector(result);
    };
    
    this.subtract = function (VectorClass) {
        if (this.vector.length !== VectorClass.vector.length) throw new Error('The two arrays must be of the same length');
        const result = this.vector.map((item, i) => item - VectorClass.vector[i]);
        return new Vector(result);
    };
    
    this.dot = function(VectorClass) {
        if (this.vector.length !== VectorClass.vector.length) throw new Error('The two arrays must be of the same length');
        const result = this.vector.reduce((accum, curr, i) => accum + (curr * VectorClass.vector[i]), 0);
        return result;
    };
    
    this.norm = function() {
        const result = this.vector.reduce((accum, curr) => Math.sqrt(Math.pow(curr, 2)));
        return result;
    };
    
    this.equals = function(VectorClass) {
        return this.toString() === VectorClass.toString();
    };
    
    this.toString = function() {
        return `(${this.vector})`;
    };
};

const bryan = new Vector([1, 2, 3]);
const grace = new Vector([3, 4, 5]);

console.log(bryan.dot(grace));