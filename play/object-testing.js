$_$wp(1);
class winston {
    constructor() {
        $_$wf(1);
        $_$w(1, 0), this.winston2 = 'kitten';
    }
}
const bryan = ($_$w(1, 1), new winston());
$_$w(1, 2), $_$tracer.log(bryan.winston2, 'bryan.winston2', 1, 2);
class meetup {
    constructor() {
        $_$wf(1);
        $_$w(1, 3), this.coders = [];
        $_$w(1, 4), this.students;
    }
    addCoder(name) {
        $_$wf(1);
        $_$w(1, 5), this.coders.push(name);
    }
    getCoders() {
        $_$wf(1);
        return $_$w(1, 6), this.coders;
    }
    removeCoder() {
        $_$wf(1);
        if ($_$w(1, 7), this.getCoders().length > 0) {
            $_$w(1, 8), this.coders.pop();
        }
    }
}
const tomorrow = ($_$w(1, 9), new meetup());
$_$w(1, 10), tomorrow.addCoder('bryan');
$_$w(1, 11), $_$wv(1, 11, '1,11', 'tomorrow.getCoders()', tomorrow.getCoders(), '$_$ne', 0, 0, '');
$_$w(1, 12), tomorrow.removeCoder();
$_$w(1, 13), $_$wv(1, 13, '1,13', 'tomorrow.getCoders()', tomorrow.getCoders(), '$_$ne', 0, 0, '');
const $_$wvd15 = $_$w(1, 14), dog = () => {
        $_$wf(1);
        const sound = ($_$w(1, 15), 'kittens');
        const diet = ($_$w(1, 16), []);
        return $_$w(1, 17), {
            speak: () => {
                $_$wf(1);
                return $_$w(1, 18), sound;
            },
            diet(item) {
                $_$wf(1);
                $_$w(1, 19), diet.push(item);
            },
            seeDiet: () => {
                $_$wf(1);
                return $_$w(1, 20), diet;
            }
        };
    };
const snickers = ($_$w(1, 21), dog());
$_$w(1, 22), $_$wv(1, 22, '1,22', 'snickers.seeDiet()', snickers.seeDiet(), '$_$ne', 0, 0, '');
$_$w(1, 23), snickers.diet('fish');
$_$w(1, 24), $_$wv(1, 24, '1,24', 'snickers.seeDiet()', snickers.seeDiet(), '$_$ne', 0, 0, '');
$_$w(1, 25), snickers.diet('tuna');
$_$w(1, 26), $_$wv(1, 26, '1,26', 'snickers.seeDiet()', snickers.seeDiet(), '$_$ne', 0, 0, '');
const $_$wvd28 = $_$w(1, 27), themeetup = () => {
        $_$wf(1);
        const coders = ($_$w(1, 28), []);
        return $_$w(1, 29), {
            getCoders: () => {
                $_$wf(1);
                return $_$w(1, 30), coders;
            },
            addCoder(name) {
                $_$wf(1);
                $_$w(1, 31), coders.push(name);
            }
        };
    };
const workshop = ($_$w(1, 32), themeetup());
$_$w(1, 33), $_$wv(1, 33, '1,33', 'workshop', workshop, '$_$ne', 1, 0, '');
$_$w(1, 34), workshop.addCoder('bryan');
$_$w(1, 35), $_$wv(1, 35, '1,35', 'workshop.getCoders()', workshop.getCoders(), '$_$ne', 0, 0, '');
$_$w(1, 36), workshop.addCoder('bryan');
$_$w(1, 37), $_$wv(1, 37, '1,37', 'workshop.getCoders()', workshop.getCoders(), '$_$ne', 0, 0, '');
$_$w(1, 38), $_$wv(1, 38, '1,38', 'workshop.coders', workshop.coders, '$_$ne', 0, 0, '');
$_$wpe(1);