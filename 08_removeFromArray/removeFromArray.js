const removeFromArray = function(arr, ...removes) {
    const newArr = [];

    for (const element of arr) {
        if (!removes.includes(element)) {
            newArr.push(element);
        }
    }

    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
