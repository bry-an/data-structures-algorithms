$_$wp(1);
const $_$wvd1 = $_$w(1, 0), answer = (public, key) => {
        $_$wf(1);
        const answerLength = ($_$w(1, 1), key.length + 1);
        const answer = ($_$w(1, 2), new Array(answerLength).fill(0));
        for (let i = 0; $_$w(1, 3), i < 10; i++) {
            $_$w(1, 4), answer[0]++;
            for (let j = 0; $_$w(1, 5), j < answerLength - 1; j++) {
                $_$w(1, 6), $_$tracer.log(getSum(answer), 'getSum(answer)', 1, 6);
                $_$w(1, 7), answer[j + 1] = key[j] + answer[j];
                if ($_$w(1, 8), getSum(answer) === public) {
                    $_$w(1, 9), keepGoing = false;
                    return $_$w(1, 10), parseInt(answer.join(''));
                }
            }
        }
    };
const $_$wvd12 = $_$w(1, 11), getSum = arr => {
        $_$wf(1);
        return $_$w(1, 12), arr.reduce((accum, curr) => {
            $_$wf(1);
            return $_$w(1, 13), accum + curr;
        });
    };
$_$w(1, 14), $_$wv(1, 14, '1,14', 'answer(13, [\n    3,\n    1\n])', answer(13, [
    3,
    1
]), '$_$ne', 0, 0, '');
$_$wpe(1);