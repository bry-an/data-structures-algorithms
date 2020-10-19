
// The United States uses the imperial system of weights and measures, which means that there are many different, seemingly arbitrary units to measure distance. There are 12 inches in a foot, 3 feet in a yard, 22 yards in a chain, and so on.

// Create a data structure that can efficiently convert a certain quantity of one unit to the correct amount of any other unit. You should also allow for additional units to be added to the system.

const assert = require('assert');

class Converter {
    constructor(base) {
        this.conversions = new Map();
        this.conversions.set(base, 1);
    }
    addUnit(name, fn) {
        this.conversions.set(name, fn(this.conversions));
        return this;
    }
    convert(amount, from, to) {
        const fromConversion = this.conversions.get(from);
        if (!fromConversion) return 'Invalid From Name';
        const toConversion = this.conversions.get(to);
        if (!toConversion) return 'Invalid To Name';
        const num = amount * fromConversion / toConversion;
        return parseFloat(num.toFixed(4));
    }
}



const inch = (conversions) => {
    return conversions.get('centimeter') * 2.54;
};

const liter = (conversions) => {
    // liter = 1000 * cm^3
    const liter = Math.pow(10, 3) * conversions.get('centimeter');
    return liter;
};

const gallon = (conversions) => {
    // 1 gallon = 3.785411784 liters
    const gallon = 3.785411784 * conversions.get('liter');
    return gallon;
};

const kilometer = (conversions) => {
    const meter = conversions.get('centimeter') * 100;
    const kilometer = meter * 1000;
    return kilometer;
};

const mile = (conversions) => {
    const foot = conversions.get('inch') * 12;
    const mile = foot * 5280;
    return mile;
};

const lightyear = (conversions) => {
    const lightyear = conversions.get('kilometer') * 9460730000000;
    return lightyear;
};
// create new converter with centimeter as base
const myConverter = new Converter('centimeter');

myConverter.addUnit('inch', inch);
myConverter.addUnit('liter', liter);
myConverter.addUnit('gallon', gallon);
myConverter.addUnit('kilometer', kilometer);
myConverter.addUnit('mile', mile);
myConverter.addUnit('lightyear', lightyear);

const inchesToCentimeters = (amount) => myConverter.convert(amount, 'inch', 'centimeter');
const milesToKilometers = (amount) => myConverter.convert(amount, 'mile', 'kilometer');
const lightyearsToMiles = (amount) => myConverter.convert(amount, 'lightyear', 'mile');


assert.deepStrictEqual(inchesToCentimeters(1), 2.54);
assert.deepStrictEqual(milesToKilometers(1), 1.6093);
assert.deepStrictEqual(lightyearsToMiles(1), 5878625079535.513);






