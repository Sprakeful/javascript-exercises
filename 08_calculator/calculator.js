const add = function(a,b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let item = 0;
  let sum = 0;
  for(item of arr){
    sum += item;
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for(num of arr){
    sum *= num;
  }
  return sum;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(fact) {
	let sum = 1;
  for(let i = 1; i <= fact; i++){
    sum *= i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
