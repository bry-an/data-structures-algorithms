const fuelCalc = mass => {
    return Math.floor(mass / 3) - 2;
};

const totalFuel = arr => {
    let fuel = 0;
    arr.forEach(mass => {
        fuel += fuelCalc(mass);
    });
    return fuel;
};

const partTwo = (input) => {
    const recurse = (fuel, total = 0) => {
        const currentFuel = fuelCalc(fuel);
        if (currentFuel <  0) {
            return total;
        }
        return recurse(currentFuel, total + currentFuel);
    };
    let fuel = 0;
    input.forEach(mass => {
        fuel += recurse(mass);
    });
    return fuel;
};

const input = [83568,
    132382,
    65095,
    105082,
    138042,
    59055,
    79113,
    123950,
    59773,
    55031,
    56499,
    122835,
    123608,
    82848,
    109981,
    115633,
    126241,
    137240,
    54983,
    129523,
    101517,
    90879,
    82446,
    105897,
    108653,
    130530,
    113607,
    140338,
    125646,
    112605,
    68080,
    105466,
    93462,
    147116,
    127370,
    128362,
    83129,
    146946,
    102658,
    62824,
    52950,
    119301,
    61671,
    92820,
    139579,
    93816,
    148535,
    77893,
    80523,
    69543,
    51773,
    144074,
    100340,
    64565,
    68404,
    88923,
    144824,
    87836,
    51209,
    99770,
    111044,
    144978,
    56585,
    137236,
    73290,
    86608,
    72415,
    57783,
    130619,
    109599,
    59655,
    99708,
    118488,
    104989,
    93812,
    135899,
    110396,
    89346,
    119482,
    67292,
    143810,
    64085,
    104169,
    145618,
    104035,
    75765,
    88638,
    139325,
    89099,
    132807,
    117255,
    98029,
    114780,
    104708,
    100671,
    98052,
    141263,
    149844,
    117643,
    123410];



// answer for part 1
console.log(totalFuel(input));

// answer for part 2
console.log(partTwo(input));