const reverseString = function(string) {
    const reverseArr = [];

    for (let i = string.length; i >= 0; i--) {
        reverseArr.push(string[i]);
    }
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
