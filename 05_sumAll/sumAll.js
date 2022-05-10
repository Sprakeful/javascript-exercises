const sumAll = function(val1, val2) {
    let result = 0;
    let min = 0;
    let max = 0;
    if(val1 < 0 || val2 < 0 || typeof(val1) != 'number' || typeof(val2) != 'number') return 'ERROR';
    if(val1 > val2){
        min = val2;
        max = val1;
    }
    else{
        min = val1;
        max = val2;
    }
    for(let i = min; i <= max; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
