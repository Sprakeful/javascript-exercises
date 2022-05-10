 removeFromArray = function(inputArray, arg) {
    let args = Array.from(arguments);
    for(let i = 0; i < args.length; i++){
        if(i != 0){
            let index = inputArray.indexOf(args[i]);
            if(index != -1){
                let dumpedArray = inputArray.splice(index, 1);
            }
        }
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
