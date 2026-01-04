const sumAll = function(firstNum, lastNum) {

    let sum = 0;

    if (typeof firstNum !== "number" || typeof lastNum !== "number") {
        return 'ERROR';
    } else if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return 'ERROR';
    } else if (firstNum <= 0 || lastNum <= 0) {
        return 'ERROR';
    }

    if (firstNum < lastNum) {

        for (let i = firstNum; i <= lastNum; i++) {
            sum = sum + i;
        }

        return sum;

    } else if (firstNum > lastNum) {

        for (let i = firstNum; i >= lastNum; i--) {
            sum = sum + i;
        }

        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
