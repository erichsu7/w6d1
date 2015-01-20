
var curriedSum = function (numArgs) {
  var numbers = [];
  var _curriedSum = function (num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      sum = 0;
      numbers.forEach(function(number) {
        sum += number;
      })
      return sum;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
};


console.log(curriedSum(5)(1)(2)(3)(4)(5));
