class HitCounter {
    constructor() {
        this.hits = [];
    }

    record(timestamp) {
        this.hits.push(timestamp);
    }

    total() {
        return this.hits.length;
    }

    range(lower, upper) {
        const inTheWindow = [];
        this.hits.forEach(hit => {
            if (lower < hit && upper > hit) {
                inTheWindow.push(hit);
            }
        });
        return inTheWindow.length;
    }
}

const hits = new HitCounter();

const first = new Date();
const second = new Date();
const third = new Date();

hits.record(first);
setTimeout(() => { 
    hits.record(new Date()
    ), 500;}
);
setTimeout(() => { 
    hits.record(new Date()
    ), 500;}
);