const reverseString = function(inputString) {
    let charArray = inputString.split('');
    charArray = charArray.reverse();
    return charArray.join('');

};

// Do not edit below this line
module.exports = reverseString;
