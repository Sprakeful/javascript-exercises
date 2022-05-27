const palindromes = function (str) {
    const reverseStr = str.replace(/[^A-Za-z]/g,'').toLowerCase().split("").reverse().join("");
    str = str.replace(/[^A-Za-z]/g,'').toLowerCase();
    return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
